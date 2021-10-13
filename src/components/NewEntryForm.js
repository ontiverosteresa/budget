import React from "react";
import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonsSaveOrCancel";

function NewEntryForm() {
  return (
    <Form unstackable>
      <Form.Group>
        <Form.Input
          icon="tags"
          width={12}
          label="Description"
          placeholder="New shinny thing/"
        />
        <Form.Input
          width={4}
          label="value"
          placeholder="100.00"
          icon="dollar"
          iconPosition="left"
        />
      </Form.Group>

      <ButtonSaveOrCancel />
    </Form>
  );
}

export default NewEntryForm;
