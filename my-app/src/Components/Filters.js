import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Filters.css";
import Ratings from "./Ratings";

export const Filters = () => {
  const [rating, setRating] = useState(5)
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
          onChange={null}
          checked={null}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={null}
          checked={null}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include Out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={null}
          checked={null}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={null}
          checked={null}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Ratings
          rating={rating}
          setRating={setRating}
        />
      </span>
      <Button
        variant="light"
        onClick={null}
      >
        Clear Filters
      </Button>
    </div>
  );
};