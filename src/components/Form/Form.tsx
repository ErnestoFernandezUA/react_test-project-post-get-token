import React, {
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectPositions } from '../../store/features/Positions/positionsSlice';
import {
  // getUsersAsync,
  postUserAsync,
  // resetUsers,
  selectPostFails,
} from '../../store/features/Users/usersSlice';
import { variablesCss } from '../../style/variables';
import { Input } from '../../UI/Input';

import './From.scss';
import { widthImportErrors } from '../../helpers/widthContentColumns';
import { PositionType } from '../../type/Position';

// const UPLOAD_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/post';

const initialUser = {
  name: 'John',
  email: '98percent-already-done@go.et',
  phone: '380989898981',
  position_id: 1,
  images: [],
};

export const Form: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const positions = useAppSelector(selectPositions);
  const fails = useAppSelector(selectPostFails);
  // console.log('Form/ fails = ', fails);

  const [user, setUser] = useState(initialUser);

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

  // const [name, setName] = useState('John');
  // const [email, setEmail] = useState('98percent-already-done@go.et');
  // const [phone, setPhone] = useState('380989898981');
  // const [position_id, setPositionId] = useState<number>(1);
  // const [images, setImages] = useState<any[]>();

  const [isUploading, setIsUploading] = useState(false);
  const inputRef = useRef<any | null>();
  const [maxWidthErrors, setMaxWidthErrors] = useState(328);

  useEffect(() => {
    setMaxWidthErrors(widthImportErrors());
  }, [dispatch]);

  // console.log(positions);

  const handleClick = () => {
    inputRef.current.click();
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
        // helper="Helper text"
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
        // helper="Helper text"
        errors={['Error1', 'Error2', 'Error3']}
        onChange={onChange}
        backgroundColor={variablesCss['--bg-color']}
        className="Form__input-email"
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

      {/* <label htmlFor="name">
        name:&nbsp;
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e: any) => setName(e.target.value)}
        />
        {fails.name && fails.name.map(e => (
          <p key={e}>{e}</p>
        ))}
      </label>
      <label htmlFor="email">
        email:&nbsp;
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />
        {fails.email && fails.email.map(e => (
          <p key={e}>{e}</p>
        ))}
      </label>
      <label htmlFor="phone">
        phone:&nbsp;
        <input
          id="phone"
          type="text"
          value={phone}
          onChange={(e: any) => setPhone(e.target.value)}
        />
        {fails.phone && fails.phone.map(e => (
          <p key={e}>{e}</p>
        ))}
      </label> */}

      <label htmlFor="positions">
        Select your position:
        {positions.map((p: PositionType) => (
          <div key={p.id}>
            <input
              name="position_id"
              type="checkbox"
              value={p.id}
              checked={p.id === user.position_id}
              onChange={onChange}
            />
            {p.name}
            &nbsp;
            {p.id === user.position_id ? 'true' : 'false'}
          </div>
        ))}

        {fails.position_id && fails.position_id.map(e => (
          <p key={e}>{e}</p>
        ))}
      </label>

      <label htmlFor="file">
        <div style={{
          visibility: 'hidden',
        }}
        >
          <input
            name="images"
            type="file"
            onChange={onChange}
            accept="image/*"
            ref={inputRef}
            multiple
            disabled={isUploading}
          />
        </div>
        {fails.images && fails.images.map(e => (
          <p key={e}>{e}</p>
        ))}
      </label>

      {user.images?.length ? (
        <>
          <div className="img-preview">
            {Array.from(user.images).map((image) => (
              <img alt={image} src={URL.createObjectURL(image)} key={image} width={100} />
            ))}
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
