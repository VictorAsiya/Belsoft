import Input from './input/index'
import Overview from './overview/Overview';

function All() {
  return (
    <div  className='w-[81%] h-[944px] flex flex-col gap-3'>
       <Input/>
       <Overview/>
    </div>
  );
}

export default All;