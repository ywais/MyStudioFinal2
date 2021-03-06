import React, { useEffect, useState } from 'react';
import { Formik, Form, useField } from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';
import axios from 'axios';

const BookFormContainer = styled.div`
  display: ${props => props.displaying};
  position: fixed;
  width: calc(70vw - 2px);
  top: 25vh;
  padding: 1vw;
  border: 1px solid black;
  direction: rtl;
  text-align: right;
  z-index: 100;
  background-color: gray;

  @media(min-width: 400px) {
    width: calc(48vw - 2px);
    right: 35vw;
  }

  @media(min-width: 800px) {
    width: calc(28vw - 2px);
    display: block;
    position: static;
  }
`

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className='formLabel' htmlFor={props.id || props.name}>{label}</label>
      <input className='text-input' {...field} {...props} />
      {meta.touched && meta.error ?
        <div className='error'>{meta.error}</div> :
        null
      }
    </>
  );
};

const MyDependentTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div style={{display: props.displaying, marginTop: '1em'}}>
      <label className='formLabel' htmlFor={props.id || props.name}>{label}</label>
      <input className='text-input' {...field} {...props} />
      {meta.touched && meta.error ?
        <div className='error'>{meta.error}</div> :
        null
      }
    </div>
  );
};

const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className='formLabel' htmlFor={props.id || props.name}>{label}</label>
      <textarea className='text-input' {...field} {...props}></textarea>
      {meta.touched && meta.error ?
        <div className='error'>{meta.error}</div> :
        null
      }
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div>
      <label className='formLabel checkbox'>
        <input id='openCheck' type='checkbox' {...field} {...props} />
        <span className='checkmark'></span>
        {children}
      </label>
      {meta.touched && meta.error ?
        <div className='error'>{meta.error}</div> :
        null
      }
    </div>
  );
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label className='formLabel' htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ?
        <div className='error'>{meta.error}</div> :
        null
      }
    </div>
  );
};


// TODO: reset button doesn't remove appends. won't read props?
// TODO: validate date & hour. use setFieldValue?
// TODO: edit tooltip text


function BookForm(props) {
  const [maxDuration, setMaxDuration] = useState(0);

  const getAvailableDuration = async () => {
    const { data } = await axios.post('/api/v1/scheduling/append',
      {
        week: new Date(props.week[0][0]) > new Date() ? 'nextWeek' : 'thisWeek',
        day: new Date(props.date).getDay(),
        hour: `${props.hour}:00`,
        userId: props.user ? props.user.id : 1 // TODO: send user and remove default
      }
    )
    .catch(e => console.log(e));
    setMaxDuration(data);
  }

  useEffect(() => {
    if(props.showForm !== 'none'){
      getAvailableDuration();
    }
  }, [props.date, props.hour, props.showForm]);

  const durationOptions = () => {
    const options = [<option key='none' value=''>??????</option>];
    let durationOption = 0.5;
    for(let i = 0; i < maxDuration; i++) {
      options.push(
        <option key={durationOption} value={i + 1}>
          {
            durationOption < 1 ?
              '?????? ??????' :
              durationOption === 1 ?
                '??????' :
                `${durationOption} ????????`
          }
        </option>
      );
      durationOption += 0.5;
    }
    return options;
  }

  const handleResetForm = () => {
    console.log({week: props.week, date: props.date, hour: props.hour, userId: 1});
    props.setShowForm('none');
    console.log(
      {
        week: new Date(props.week[0][0]) > new Date() ? 'nextWeek' : 'thisWeek',
        day: new Date(props.date).getDay(),
        hour: `${props.hour}:00`,
        userId: props.user ? props.user.id : 1 // remove default
      }
    );
    axios.post('/api/v1/scheduling/unappend',
      {
        week: new Date(props.week[0][0]) > new Date() ? 'nextWeek' : 'thisWeek',
        day: new Date(props.date).getDay(),
        hour: `${props.hour}:00`,
        userId: props.user ? props.user.id : 1 // remove default
      }
    )
    .catch(e => console.log(e));
  }

  return (
    <BookFormContainer displaying={props.showForm || 'none'}>
      <Formik
        initialValues={{
          title: '',
          date: props.date,
          hour: props.hour,
          duration: '',
          isOpen: false,
          openTo: '',
          notes: ''
        }}
        validationSchema={Yup.object({
          title: Yup.string()
            .max(50, '???????????? ?????????? ??????')
            .required('???? ?????????? ??????????'),
          // date: Yup.string()
          //   .required('???? ?????????? ??????'),
          // hour: Yup.string()
          //   .required('???? ?????????? ??????'),
          duration: Yup.string()
            .oneOf(
              ['1', '2', '3', '4', '5', '6'],
              '?????? ?????????? ???????? ????????'
            )
            .required('???? ?????????? ???? ?????? ????????')
        })}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          console.log(
            {
              week: new Date(props.week[0][0]) > new Date() ? 'nextWeek' : 'thisWeek',
              day: new Date(props.date).getDay(),
              hour: `${props.hour}:00`,
              userId: props.user ? props.user.id : 1 // remove default
            }
          );
          await axios.post('/api/v1/scheduling/book',
            {
              ...values,
              week: new Date(props.week[0][0]) > new Date() ? 'nextWeek' : 'thisWeek',
              day: new Date(props.date).getDay(),
              hour: `${props.hour}:00`,
              userId: props.user ? props.user.id : 1 // remove default
            }
          )
          .catch(e => console.log(e));
          // await axios.get('/api/v1/scheduling/update/thisWeek');
          // props.setWeek(await axios.get('/api/v1/scheduling/update/thisWeek'));
          setSubmitting(false);
          resetForm();
          props.setShowForm('none');
        }}
        onReset={(values) => {
          // handleResetForm();
          console.log(
            {
              week: new Date(props.week[0][0]) > new Date() ? 'nextWeek' : 'thisWeek',
              day: new Date(props.date).getDay(),
              hour: `${props.hour}:00`,
              userId: props.user ? props.user.id : 1 // remove default
            }
          );
          console.log(values);
          // axios.post('/api/v1/scheduling/unappend',
          //   {
          //     week: new Date(props.week[0][0]) > new Date() ? 'nextWeek' : 'thisWeek',
          //     day: new Date(props.date).getDay(),
          //     hour: `${props.hour}:00`,
          //     userId: props.user ? props.user.id : 1 // remove default
          //   }
          // )
          // .catch(e => console.log(e))
          props.setShowForm('none');
          props.setDate('')
          props.setHour('')
        }}
      >
        {({ values, setFieldValue }) => (
          <Form className='bookForm'>
            <MyTextInput
              className='longInput'
              id='title'
              label='??????????'
              name='title'
              type='text'
            /><br />
            <MyTextInput
              className='halfInput'
              id='date'
              label='??????????'
              name='date'
              // value={props.date}
              // setFieldValue(...)
              type='text'
              placeholder={props.date}
              disabled
              /><br />
            <div className='timeInputs'>
              <div className='halfInputContainer'>
                <MyTextInput
                  className='fullInput'
                  id='hour'
                  label='?????? ??????????'
                  name='hour'
                  // value={props.hour}
                  // setFieldValue(...)
                  type='text'
                  placeholder={props.hour}
                  disabled
                />
              </div>
              <div className='halfInputContainer'>
                <MySelect
                  className='fullInput'
                  id='duration'
                  label='?????? ??????????'
                  name='duration'
                  disabled={!(props.date && props.hour)}
                >
                  {durationOptions()}
                </MySelect>
              </div>
            </div><br />
            <MyCheckbox id='isOpen' name='isOpen'>
              ?????????? ??????????
              <span className='tooltip'>?
                <span className='tooltiptext'>?????? ???????? ???? ???????</span>
              </span>
            </MyCheckbox>
            <MyDependentTextInput
              className='longInput'
              id='openTo'
              label='??????????????'
              name='openTo'
              type='text'
              displaying={values.isOpen ? 'inline-block' : 'none'}
            /><br />
            <MyTextArea
              className='longInput'
              id='notes'
              label='??????????'
              name='notes'
              type='text'
            />
            <br />
            <div className='bookFormButtons'>
              <button type='submit' disabled={!(props.date && props.hour)}>????????</button>
              <button type='reset'>??????????</button>
            </div>
          </Form>
        )}
      </Formik>
    </BookFormContainer>
  );
};

export default BookForm;
