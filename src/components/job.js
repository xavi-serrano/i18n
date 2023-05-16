import React from "react";
import {FormattedDate} from 'react-intl';
import { FormattedMessage } from "react-intl";

const Job = (props) => {
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td></td>{props.offer.salary} <FormattedMessage id={MillionPlural(props.offer.salary)}/>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
        value={new Date(props.offer.date)}
        year='numeric'
        month='long'
        day='numeric'
        weekday='long'
        />
      </td>
      <td>{props.offer.views.toLocaleString()}</td>
    </tr>
  );
};

function MillionPlural(value) {
  if (value === 1) {
    return "million";
  }
  else {
    return "millions";
  }
}

export default Job;


