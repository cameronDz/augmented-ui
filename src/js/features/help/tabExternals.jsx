import React, { Fragment } from 'react';

const externalSites = [
  {
    id: 'polar',
    name: 'Polar',
    url: 'https://flow.polar.com/'
  },
  {
    id: 'fitbit',
    name: 'FitBit',
    url: 'https://www.fitbit.com/'
  },
  {
    id: 'onthegomap',
    name: 'On the go Map',
    url: 'https://onthegomap.com/#/create'
  }
];
const title = 'External portals';

const TabExternals = () => {
  return (
    <Fragment>
      <h3>{title}</h3>
      {externalSites.map((item, idx) => {
        return (
          !!item && (
            <Fragment key={item?.id || idx}>
              <p>
                <span>{item.name}: </span>
                <span>
                  <a href={item.url} target="_">
                    {item.url}
                  </a>
                </span>
              </p>
            </Fragment>
          )
        );
      })}
    </Fragment>
  );
};

export default TabExternals;
