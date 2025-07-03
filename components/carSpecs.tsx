interface CarSpecsProps {
    modelYear?: string;
    fuelType?: string;
    topSpeed?: string;
    price?: string;
}

const CarSpecs: React.FC<CarSpecsProps> = ({
                                               modelYear = '2025',
                                               fuelType = 'Electric',
                                               topSpeed = '220 km/h',
                                               price = '$45,000',
                                           }) => {
    return (
        <div className="bg-gray-100 p-4 rounded-xl shadow-inner mt-6 space-y-2">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Car Specifications</h3>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-800">
                <p><span className="font-medium">Model Year:</span> {modelYear}</p>
                <p><span className="font-medium">Fuel Type:</span> {fuelType}</p>
                <p><span className="font-medium">Top Speed:</span> {topSpeed}</p>
                <p><span className="font-medium">Price:</span> {price}</p>
            </div>
        </div>
    );
};

export default CarSpecs;
