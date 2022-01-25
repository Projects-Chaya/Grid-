import React from 'react';

const Grid = ({ config, data}) => (
  <table>
    <thead>
      
      <tr>
        {config.map((v) => <th>{v.title}</th>)}
      </tr>
    </thead>
    <tbody>

      <td>
        {data.map((v) => (<tr>{v.number}</tr>))}
      </td>
      <td>
        {data.map((v) => (<tr>{v.imdbID}</tr>))}
      </td>
      <td>
        {data.map((v) => (<tr>{v.Title}</tr>))}
      </td>
      <td>
        {data.map((v) => (<tr>{v.imdbRating}</tr>))}
      </td>
    </tbody>
  </table>
);

export default Grid;