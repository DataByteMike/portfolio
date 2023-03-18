const Entertainment = () => {
  return (
    <div className="py-8 lg:py-12 bg-tertiary">
      <div className="container mx-auto">
        <div className="m-auto relative block w-[400px] lg:w-[600px] h-[100px] border-b-white border-b-[3px] overflow-hidden">
          <div className="mountain-car" />
          <div className="absolute w-[117px] h-[32px] left-[35%] lg:left-[40%] top-[20px] wind">
            <div className="absolute block w-0 h-0 top-[38px] left-[20px] border-[20px] border-transparent border-b-8 
              border-b-[#ffe4e1] border-l-[20px] border-l-[#ffe4e1]" 
            />
            <div className="absolute block bg-[#ffe4e1] h-[15px] w-[92px] top-[50px] left-[20px]" />
            <div className="absolute block h-[35px] w-[75px] border-[4px] box-border left-[40%] top-[97%] border-[#ffe4e1] rounded-tr-[30px] rounded-tl-window" />
            <div className="absolute block h-[16px] w-[50px] top-[50px] left-[90px] rounded-br-[10px] bg-[#ffe4e1] rounded-tr-frontcar" />
            <div className="absolute block w-[20px] h-[20px] top-[56.5px] left-[42px] bg-[#ffe4e1] rounded-[50%] border-[3px] border-solid border-[#333]" />
            <div className="absolute block w-[20px] h-[20px] top-[56.5px] left-[108px] bg-[#ffe4e1] rounded-[50%] border-[3px] border-solid border-[#333]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Entertainment;