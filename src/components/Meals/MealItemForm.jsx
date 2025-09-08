import Input from '../UI/Input.jsx';
import styles from './MealItemForm.module.scss';

const MealItemForm = (props) => {
  return (
    <form className={styles.form}>
        {/*재사용 가능한 가변 props 객체로 전달하기*/}
        <Input
            // label='수량'
            // x={{
            //     type: 'range',
            //     onChange: () => console.log('change!!'),
            //     min: 1,
            //     max: 5
            // }}
            inputAttr={{
                id: 'amount_' + props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1',
            }}
        />
      {/*<Input*/}
      {/*  label='수량'*/}
      {/*  // input={{*/}
      {/*  //   id: 'amount_' + props.id,*/}
      {/*  //   type: 'number',*/}
      {/*  //   min: '1',*/}
      {/*  //   max: '5',*/}
      {/*  //   step: '1',*/}
      {/*  //   defaultValue: '1',*/}
      {/*  // }}*/}
      {/*    x={{*/}
      {/*        type: 'text',*/}
      {/*        onFoucus: () => console.log(`focus!`),*/}
      {/*        value: 'Hello'*/}
      {/*    }}*/}
      {/*/>*/}
      <button>담기</button>
    </form>
  );
};

export default MealItemForm;
