import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from 'react-simple-maps';

const Map = () => {
  return (
    <ComposableMap
      projection='geoAlbersUsa' // Change the projection to 'geoAlbersUsa' for the USA map
      projectionConfig={{
        scale: 500, // Adjust the scale as needed
      }}
      style={{ width: '100%', height: '100%' }}
      viewBox='0 0 400 600'
    >
      <ZoomableGroup center={[-74.006, 40.7128]} zoom={1.5}>
        {' '}
        {/* Centered on New York City */}
        <Geographies geography={'./public/features.json'}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill='#2C065D'
                stroke='#FFFFFF'
                strokeWidth={0.5}
              />
            ))
          }
        </Geographies>
      </ZoomableGroup>

      <Annotation
        subject={[-74.006, 40.7128]} // Coordinates for New Jersey
        dx={-20}
        dy={-30}
        connectorProps={{
          stroke: 'white',
          strokeWidth: 3,
          strokeLinecap: 'round',
        }}
      >
        <text x='-150' textAnchor='end' alignmentBaseline='middle' fill='white'>
          {'New Jersey'}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
