import Map from './Map';

const MapSection = () => {
  return (
    <Map
      onLoad={() => {
        console.log('onLoad');
      }}
    />
  );
};
export default MapSection;
