
import items from "@/db/items.json";


export default function Page() {
	
	
	
  return (
  <>
	 
		<h1 className="text-3xl font-bold underline bg-blue-300">
		  Home Demo-29 Page
		</h1>
		{items.itemsGrid.map((item) => (
			<div key={item.id}>{item.title}</div>
		))}
    </>
  )
}	
