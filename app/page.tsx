
import items from "@/db/items.json";


export default function Page() {
	
	
	
  return (
  <>
	 
		<h1 className="text-3xl font-bold underline bg-blue-300">
		  Pasar Bone Online
		</h1>
		{items.itemsGrid.map((item) => (
			<div key={item.id}>{item.title}</div>
		))}
    </>
  )
}	
