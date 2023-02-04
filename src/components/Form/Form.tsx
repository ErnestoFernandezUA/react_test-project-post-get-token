import React, {
  FunctionComponent,
  useRef,
  useState,
} from 'react';
import { PayloadAction } from '@reduxjs/toolkit';
import { scroller } from 'react-scroll';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getTokenAsync } from '../../store/features/Token/tokenSlice';
import {
  getUsersAsync,
  resetUsers,
} from '../../store/features/Users/usersSliceGet';
import {
  postUserAsync,
  selectIsPostRejected,
  selectPostFails,
  selectIsUpLoading,
  selectUsersPostServerMessage,
  clearErrorMessage,
  addError,
  clearError,
} from '../../store/features/Users/usersSlicePost';

import { Input } from '../../UI/Input';
import { widthImportErrors } from '../../helpers/widthContentColumns';
import { Select } from '../Select';
import { Button } from '../../UI/Button';
import { InputFile } from '../../UI/InputFile';
import { PostResponsePayload } from '../../api/users.post';
import { Loader } from '../Loader';

import {
  maskPhone,
  unMaskPhone,
} from '../Header/maskPhone';
import { UserKeys, UserPost } from '../../type/User';

import { variablesCSS } from '../../style/variables';
import './From.scss';
import '../../style/Wrapper.scss';
import Success from '../../images/success-image.svg';

const initialUser = {
  name: '',
  email: '',
  phone: '',
  position_id: '',
  photo: undefined,
};

// add reqex validation

export const Form: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const isPostRejected = useAppSelector(selectIsPostRejected);
  const serverMessage = useAppSelector(selectUsersPostServerMessage);
  const validationFails = useAppSelector<UserPost<string[]>>(selectPostFails);
  const isUploading = useAppSelector(selectIsUpLoading);
  const [user, setUser] = useState<UserPost<string, File | undefined>>(initialUser);
  const [isPostSuccess, setIsPostSuccess] = useState<boolean>(false);
  const maxWidthErrors = useRef(widthImportErrors());

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value,
      files,
    } = event.target;

    if (validationFails[name as keyof UserPost<string[]>]?.length) {
      dispatch(clearError({ property: name as UserKeys }));
    }

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

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const key = e.target.name;

    if (!user[key as keyof UserPost<string>]) {
      dispatch(clearError({ property: key as UserKeys }));
      dispatch(addError[key as keyof UserPost<string[]>](`The ${key} field is required.`));
    }
  };

  const isValid = () => {
    let isValidInputs = true;

    Object.keys(addError).forEach((key: string) => {
      dispatch(clearError({ property: key as UserKeys }));

      if (!user[key as keyof UserPost<string>]) {
        dispatch(addError[key as keyof UserPost<string[]>](`The ${key} field is required.`));
        isValidInputs = false;
      }
    });

    return isValidInputs;
  };

  const scrollTo = (elem: string) => {
    scroller.scrollTo(elem, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
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
    formData.append('photo', photo as File);

    try {
      dispatch(getTokenAsync());

      const addUserResponse
      = await dispatch(postUserAsync(formData)) as PayloadAction<PostResponsePayload>;

      if (addUserResponse.payload.success) {
        setIsPostSuccess(true);
        dispatch(resetUsers());

        setTimeout(() => {
          scrollTo('ArticleGet-anchor-head');
        }, 1000);

        await new Promise((resolve) => setTimeout(resolve, 1000));
        await dispatch(getUsersAsync({}));
      }
    } catch (errorPost) {
      // eslint-disable-next-line no-console
      console.log('errorPost', errorPost);
    } finally {
      setTimeout(() => {
        dispatch(clearErrorMessage());
        setIsPostSuccess(false);
      }, 2000);
    }
  };

  return (
    <div className="Form Wrapper">
      {isUploading && (
        <Loader />
      )}

      {isPostRejected && (
        <h2 className="Form__server-message">{serverMessage}</h2>
      )}

      {isPostSuccess && (
        <>
          <h2 className="Form__title-success">{serverMessage}</h2>
          <img src={Success} alt="success" />
        </>
      )}

      {!serverMessage && !isUploading && !isPostSuccess && (
        <>
          <Input
            name="name"
            label="Your name"
            type="text"
            value={user.name}
            errors={validationFails.name}
            onChange={onChange}
            onBlur={onBlur}
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
            onBlur={onBlur}
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
            onBlur={onBlur}
            backgroundColor={variablesCSS['--bg-color']}
            className="Form__input Form__input-phone"
            maxWidthErrors={maxWidthErrors.current}
          />

          <Select
            currentValue={user.position_id}
            onChange={onChange}
            className="Form__input"
            fails={validationFails.position_id}
          />

          <InputFile
            fileName={(user.photo as File)?.name}
            isDisabled={isUploading}
            onChange={onChange}
            fails={validationFails.photo}
            className="Form__input"
          />

          <Button
            onClick={(e:React.FormEvent) => handleUpload(e)}
            disabled={isUploading}
          >
            Sign up
          </Button>
        </>
      )}
    </div>
  );
};
