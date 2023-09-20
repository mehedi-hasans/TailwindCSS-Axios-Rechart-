import { Map as Maps, Marker } from "pigeon-maps"
export default function Map() {
  return (
    <div>
    <Maps height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
      <Marker width={50} anchor={[50.879, 4.6997]} />
    </Maps>
    </div>
  )
}

// 13900
// 3.8 5th semester


// 1000
// 9500

// 2000
