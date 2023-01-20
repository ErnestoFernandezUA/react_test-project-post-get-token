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

export const Form: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const positions = useAppSelector(selectPositions);
  const fails = useAppSelector(selectPostFails);

  // console.log('Form/ fails = ', fails);

  const [name, setName] = useState('John');
  const [email, setEmail] = useState('98percent-already-done@go.et');
  const [phone, setPhone] = useState('380989898981');
  const [position_id, setPositionId] = useState<number>(1);
  const [images, setImages] = useState<any[]>();
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
      console.log('handleUpload',
        {
          user: {
            name, email, phone, images, position_id,
          },
        });

      dispatch(postUserAsync({
        user: {
          name,
          email,
          phone,
          images,
          position_id,
        },
      }));

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
        label="Your name"
        type="text"
        value={name}
        // helper="Helper text"
        errors={fails.name}
        onChange={(e) => setName(e.target.value)}
        backgroundColor={variablesCss['--bg-color']}
        className="Form__input-name"
        maxWidthErrors={maxWidthErrors}
      />

      <Input
        label="Email"
        type="text"
        value={email}
        // helper="Helper text"
        errors={['Error1', 'Error2', 'Error3']}
        onChange={(e: any) => setEmail(e.target.value)}
        backgroundColor={variablesCss['--bg-color']}
        className="Form__input-email"
        maxWidthErrors={maxWidthErrors}
      />

      <Input
        label="Phone"
        type="text"
        value={phone}
        helper="+38 (XXX) XXX - XX - XX"
        errors={['Error1', 'Error2', 'Error3']}
        onChange={(e: any) => setPhone(e.target.value)}
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
              type="checkbox"
              value={p.id}
              checked={p.id === position_id}
              onChange={() => setPositionId(p.id)}
            />
            {p.name}
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
            type="file"
            onChange={(e: any) => setImages(e.target.files)}
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

      {images?.length ? (
        <>
          <div className="img-preview">
            {Array.from(images).map((image) => (
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
