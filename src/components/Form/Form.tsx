import React, {
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectPositions } from '../../store/features/Positions/positionsSlice';
import { getUsersAsync, postUserAsync, selectPostFails } from '../../store/features/Users/usersSlice';
import { variablesCss } from '../../style/variables';
import { Input } from '../../UI/Input';

import './From.scss';
import { widthImportErrors } from '../../helpers/widthContentColumns';

// const UPLOAD_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/post';

export const Form: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const positions = useAppSelector(selectPositions);
  const fails = useAppSelector(selectPostFails);

  // console.log('Form/ fails = ', fails);

  const [name, setName] = useState('Tom');
  const [email, setEmail] = useState('tom@valid.et');
  const [phone, setPhone] = useState('+380955388485');
  const [position_id, setPositionId] = useState('1');
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

  // const handleUpload1 = async () => {
  //   setIsUploading(true);
  //   try {
  //     // const formData = new FormData();
  //     // formData.append('Image', images[0]);

  //     // const res = await fetch(UPLOAD_URL, {
  //     //   method: "POST",
  //     //   body: formData
  //     // });

  //     // const data = await res.json();
  //     // console.log(data);

  //     // const { data: { message } } = await axios.post(UPLOAD_URL, formData);
  //     // alert(message);

  //     // setImages(undefined);
  //     // inputRef.current.value = "";

  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setIsUploading(false);
  //   }

  // };

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

      await dispatch(getUsersAsync({ page: 1, count: 6 }));

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
        // helper="Your name"
        errors={fails.name}
        onChange={(e) => setName(e.target.value)}
        backgroundColor={variablesCss['--bg-color']}
        className="Form__input-name"
        maxWidthErrors={maxWidthErrors}
      />
      <Input
        label="Email"
        type="text"
        value={name}
        // helper="Email"
        errors={['Error1', 'Error2dsdfsdfsdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd', 'Error3']}
        onChange={(e) => setName(e.target.value)}
        backgroundColor={variablesCss['--bg-color']}
        className="Form__input-email"
        maxWidthErrors={maxWidthErrors}
      />

      <label htmlFor="name">
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
      </label>

      <label htmlFor="positions">
        positions:&nbsp;
        <select
          id="positions"
          value={position_id}
          onChange={(e) => setPositionId(e.target.value)}
        >
          {positions.map(p => (
            <option key={p.id} value={p.id}>{p.name}</option>
          ))}
        </select>
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
              <img alt={image} src={URL.createObjectURL(image)} key={image} />
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
