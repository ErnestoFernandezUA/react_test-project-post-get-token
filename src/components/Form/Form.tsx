import React, {
  FunctionComponent,
  useRef,
  useState,
} from 'react';
import { PayloadAction } from '@reduxjs/toolkit';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getTokenAsync } from '../../store/features/Token/tokenSlice';
import {
  getUsersAsync,
  postUserAsync,
  resetUsers,
  selectPostFails,
  selectUserIsUpLoading,
  selectUsersErrorPost,
} from '../../store/features/Users/usersGETSlice';
import { Input } from '../../UI/Input';
import { widthImportErrors } from '../../helpers/widthContentColumns';
import { UserPost } from '../../type/Form';
import { Select } from '../Select';
import { Button } from '../../UI/Button';
import { InputFile } from '../../UI/InputFile';
import { PostResponsePayload } from '../../api/users.post';

import { variablesCSS } from '../../style/variables';
import './From.scss';
import '../../style/Wrapper.scss';
import {
  maskPhone,
  unMaskPhone,
} from '../Header/maskPhone';

const initialUser = {
  // name: 'John',
  // email: '98percent-already-done@go.et',
  // phone: '380989898981',
  // position_id: '1',
  // photo: new File(["initial"], "initial.jpg"),
  photo: undefined,

  name: '',
  email: '',
  phone: '',
  position_id: '',
};

// reqex validation

export const Form: FunctionComponent = () => {
  const dispatch = useAppDispatch();

  const error = useAppSelector(selectUsersErrorPost);
  const validationFails = useAppSelector(selectPostFails);
  const isUploading = useAppSelector(selectUserIsUpLoading);
  const [user, setUser] = useState<UserPost>(initialUser);
  const maxWidthErrors = useRef(widthImportErrors());
  // const [isSuccess, setIsSuccess] = useState(false);
  // const [isError, setIsError] = useState(false);

  // useEffect(() => {
  //   // setMaxWidthErrors(widthImportErrors());
  //   // console.log('validation');
  // }, [dispatch, validationFails.phone?.length]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value,
      files,
    } = event.target;

    // eslint-disable-next-line no-console
    console.log(name, value, files);

    setUser({
      ...user,
      // eslint-disable-next-line no-nested-ternary
      [name]: files
        ? files[0]
        : name === 'phone'
          ? unMaskPhone(value)
          : value,
    });
  };

  const isValid = () => {
    if (!user.photo) {
      // eslint-disable-next-line no-console
      console.log('validation false');

      return false;
    }

    return true;
  };

  const handleUpload = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!isValid()) {
      return;
    }

    const {
      name,
      email,
      phone,
      position_id,
      photo,
    } = user;

    const formData = new FormData();

    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('position_id', position_id);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    formData.append('photo', photo!);

    try {
      dispatch(getTokenAsync());
      const addUserResponse
      = await dispatch(postUserAsync(formData)) as PayloadAction<PostResponsePayload>;

      // eslint-disable-next-line no-console
      console.log('form/ addUser', addUserResponse);

      if (addUserResponse.payload.success) {
        dispatch(resetUsers());

        // eslint-disable-next-line no-console
        console.log('Form// getUsersAsync');
        await dispatch(getUsersAsync({}));
      }
    } catch (errorPost) {
      // eslint-disable-next-line no-console
      console.log(errorPost);
    } finally {
      setTimeout(() => {
      }, 2000);
    }
  };

  // eslint-disable-next-line no-console
  console.log('user:', user);

  return (
    <div className="Form Wrapper">
      {error && <h2 className="Form__error-message">{error}</h2>}

      <Input
        name="name"
        label="Your name"
        type="text"
        value={user.name}
        errors={validationFails.name}
        onChange={onChange}
        backgroundColor={variablesCSS['--bg-color']}
        className="Form__input Form__input-name"
        maxWidthErrors={maxWidthErrors.current}
      />

      <Input
        name="email"
        label="Email"
        type="text"
        value={user.email}
        errors={validationFails.email}
        onChange={onChange}
        backgroundColor={variablesCSS['--bg-color']}
        className="Form__input Form__input-email"
        maxWidthErrors={maxWidthErrors.current}
      />

      <Input
        name="phone"
        label="Phone"
        type="text"
        value={maskPhone(user.phone)}
        helper="+38 (XXX) XXX - XX - XX"
        errors={validationFails.phone}
        onChange={onChange}
        backgroundColor={variablesCSS['--bg-color']}
        className="Form__input Form__input-phone"
        maxWidthErrors={maxWidthErrors.current}
      />

      <Select
        currentValue={user.position_id}
        onChange={onChange}
        className="Form__input"
      />

      <InputFile
        fileName={user.photo?.name}
        isDisabled={isUploading}
        onChange={onChange}
        fails={validationFails.photo}
        className="Form__input"
      />

      <Button
        onClick={(e:React.FormEvent) => handleUpload(e)}
        disabled={isUploading}
        className="Form__button-submit"
      >
        Sign up
      </Button>
    </div>
  );
};
