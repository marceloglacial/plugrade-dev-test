export const IncomeForm = () => {
  return (
    <div className='w-[200px] '>
      <form className='flex flex-col gap-4'>
        <div className='flex flex-col'>
          <label>Anual income</label>
          <input
            id='income'
            type='number'
            min={0}
            required
            className='disabled:cursor-not-allowed disabled:opacity-30'
          />
        </div>
        <div className='flex flex-col'>
          <label>Tax year</label>
          <select
            id='year'
            className=' disabled:cursor-not-allowed disabled:opacity-30'
          >
            <option key={2022} value={2022}>
              2022
            </option>
          </select>
        </div>
        <div>
          <button className='bg-black text-white disabled:opacity-30 px-4'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
