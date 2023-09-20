import PriceOption from "../Price Option/PriceOption"

export default function PriceOptions() {
    const priceOptions =[
        {
          "id": 1,
          "name": "Product A",
          "features": [
            "Feature 1",
            "Feature 2",
            "Feature 3"
          ],
          "price": 19.99
        },
        {
          "id": 2,
          "name": "Product B",
          "features": [
            "Feature 2",
            "Feature 4",
            "Feature 6"
          ],
          "price": 29.99
        },
        {
          "id": 3,
          "name": "Product C",
          "features": [
            "Feature 1",
            "Feature 3",
            "Feature 5"
          ],
          "price": 24.99
        },
        {
          "id": 4,
          "name": "Product D",
          "features": [
            "Feature 4",
            "Feature 6",
            "Feature 7"
          ],
          "price": 39.99
        },
        {
          "id": 5,
          "name": "Product E",
          "features": [
            "Feature 1",
            "Feature 5",
            "Feature 7"
          ],
          "price": 34.99
        },
        {
          "id": 6,
          "name": "Product F",
          "features": [
            "Feature 2",
            "Feature 4",
            "Feature 6"
          ],
          "price": 44.99
        }
      ]
      

    
  return (
    <div className="mx-auto w-10/12">
        <h3 className="text-4xl py-9">Best Prices in the world</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
        }
        </div>
    </div>
  )
}
