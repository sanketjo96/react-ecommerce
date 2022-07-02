import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import RangeSlider from 'react-bootstrap-range-slider';
import { StoreContext } from "../Context/Context";
import "./Filters.css";
import Ratings from "./Ratings";

export const Filters = () => {
  const { filter, filterDispatch } = useContext(StoreContext)

  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={e => filterDispatch({ type: 'SET_PRODUCT_SORT', payload: 'lowToHigh' })}
          checked={filter.sort === 'lowToHigh' ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={e => filterDispatch({ type: 'SET_PRODUCT_SORT', payload: 'highToLow' })}
          checked={filter.sort === 'highToLow' ? true : false}
        />
      </span>
      <span>Reviewed By: </span>
      <span>
        <RangeSlider
          min={10}
          max={700}
          value={filter.atleastReviewedBy}
          onChange={e => filterDispatch({ type: 'SET_PRODUCT_REVIEWED_BY', payload: e.target.value })}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Ratings
          rating={filter.rating}
          setRating={rate => filterDispatch({ type: 'SET_PRODUCT_RATING', payload: rate })}
        />
      </span>
      <Button
        variant="light"
        onClick={e => filterDispatch({ type: 'SET_CLEAR', payload: e.target.value })}
      >
        Clear Filters
      </Button>
    </div>
  );
};