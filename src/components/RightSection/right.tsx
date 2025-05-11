import Input from './input/index'
import Overview from './overview/Overview';
import styles from './right.module.css'

function All() {
  return (
    <div  className={`w-[81%] h-[944px] flex flex-col gap-3 ${styles.all}`}>
       <Input/>
       <Overview/>
    </div>
  );
}

export default All;