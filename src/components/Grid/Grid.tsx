function Grid() {
  return (
    <div className="grid grid-cols-12 gap-2">
        <div className="col-span-5 bg-red-500 h-screen">Container 1</div>
        <div className="col-span-2 bg-green-500 h-screen">Container 2</div>
        <div className="col-span-5 bg-yellow-500 h-screen">Container 3</div>
        <div className="col-span-3 bg-blue-500 h-screen">Container 4</div>
    </div>
  )
}

export default Grid