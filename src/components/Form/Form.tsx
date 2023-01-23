import React, {
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectPositions } from '../../store/features/Positions/positionsSlice';
import {
  postUserAsync,
  selectPostFails,
} from '../../store/features/Users/usersSlice';
import { variablesCss } from '../../style/variables';
import { Input } from '../../UI/Input';

import './From.scss';
import { widthImportErrors } from '../../helpers/widthContentColumns';
import { PositionType } from '../../type/Position';
import { UserPost } from '../../type/From';

const initialUser = {
  name: 'John',
  email: '98percent-already-done@go.et',
  phone: '380989898981',
  position_id: '1',
  images: [],
};

export const Form: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const positions = useAppSelector(selectPositions);
  const fails = useAppSelector(selectPostFails);

  const [user, setUser] = useState<UserPost>(initialUser);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value,
    } = event.target;

    // eslint-disable-next-line no-console
    console.log('name-value', name, value);

    setUser({
      ...user,
      [name]: name === 'position_id' ? Number(value) : value,
    });

    // eslint-disable-next-line no-console
    console.log(user);
  };

  const [isUploading, setIsUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [maxWidthErrors, setMaxWidthErrors] = useState(328);

  useEffect(() => {
    setMaxWidthErrors(widthImportErrors());
  }, [dispatch]);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleUpload = async () => {
    setIsUploading(true);

    try {
      // eslint-disable-next-line no-console
      console.log('handleUpload', { user });

      dispatch(postUserAsync({ user }));

      // eslint-disable-next-line no-console
      // console.log('before dispatch(resetUsers())');

      // dispatch(resetUsers());

      // eslint-disable-next-line no-console
      // console.log('after dispatch(resetUsers())');

      // await dispatch(getUsersAsync({ page: 1, count: 6 }));

      // eslint-disable-next-line no-empty
    } catch (error) {
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="Form">
      <Input
        name="name"
        label="Your name"
        type="text"
        value={user.name}
        errors={fails.name}
        onChange={onChange}
        backgroundColor={variablesCss['--bg-color']}
        className="Form__input-name"
        maxWidthErrors={maxWidthErrors}
      />

      <Input
        name="email"
        label="Email"
        type="text"
        value={user.email}
        errors={['Error1', 'Error2', 'Error3']}
        onChange={onChange}
        backgroundColor={variablesCss['--bg-color']}
        className="Form__input-email Wrapper"
        maxWidthErrors={maxWidthErrors}
      />

      <Input
        name="phone"
        label="Phone"
        type="text"
        value={user.phone}
        helper="+38 (XXX) XXX - XX - XX"
        errors={['Error1', 'Error2', 'Error3']}
        onChange={onChange}
        backgroundColor={variablesCss['--bg-color']}
        className="Form__input-phone"
        maxWidthErrors={maxWidthErrors}
      />

      <label htmlFor="positions">
        Select your position:
        {positions.map((p: PositionType) => (
          <div key={p.id}>
            <label htmlFor={p.name}>
              <input
                id={p.name}
                name="position_id"
                type="checkbox"
                value={String(p.id)}
                checked={String(p.id) === user.position_id}
                onChange={onChange}
              />
              {p.name}
            </label>
          </div>
        ))}

        {fails.position_id && fails.position_id.map(e => (
          <p key={e}>{e}</p>
        ))}
      </label>

      <label htmlFor="file">
        <div style={{
          // visibility: 'hidden',
        }}
        >
          <input
            name="images"
            type="file"
            onChange={onChange}
            accept="image/jpg"
            ref={inputRef}
            multiple
            disabled={isUploading}
          />
        </div>
        {/* {fails.images && fails.images.map(e => (
          <p key={e}>{e}</p>
        ))} */}
      </label>

      {user.images?.length ? (
        <>
          <div className="img-preview">
            {/* {Array.from(user.images).map((image) => (
              <img alt={image} src={URL.createObjectURL(image)} key={image} width={100} />
            ))} */}
          </div>
          <div className="action-buttons">
            <button
              type="button"
              onClick={handleClick}
              disabled={isUploading}
            >
              Change
            </button>
            {/* <button onClick={handleUpload} disabled={isUploading}>Upload</button> */}
          </div>
        </>
      ) : (
        <button type="button" onClick={handleClick}>Chose Images</button>
      )}

      <button
        type="button"
        onClick={() => handleUpload()}
        disabled={isUploading}
      >
        Post User
      </button>
    </div>
  );
};
