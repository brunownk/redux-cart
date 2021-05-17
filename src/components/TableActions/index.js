import React from 'react';

import PropTypes from 'prop-types';
import { MdEdit, MdDelete, MdRemoveRedEye, MdFilterNone } from 'react-icons/md';

import {
  Container,
  DeleteButton,
  EditButton,
  ViewButton,
  DuplicateButton,
} from './styles';

const TableActions = ({ value, onDelete, onEdit, onView, onDuplicate }) => {
  return (
    <Container>
      {onView && (
        <ViewButton type="button" value={value} onClick={onView}>
          <MdRemoveRedEye />
        </ViewButton>
      )}
      {onDuplicate && (
        <DuplicateButton type="button" value={value} onClick={onDuplicate}>
          <MdFilterNone />
        </DuplicateButton>
      )}
      {onEdit && (
        <EditButton type="button" value={value} onClick={onEdit}>
          <MdEdit />
        </EditButton>
      )}
      {onDelete && (
        <DeleteButton type="button" value={value} onClick={onDelete}>
          <MdDelete />
        </DeleteButton>
      )}
    </Container>
  );
};

TableActions.defaultProps = {
  value: '',
  onDelete: '',
  onEdit: '',
  onView: '',
  onDuplicate: '',
};

TableActions.propTypes = {
  value: PropTypes.string,
  onDelete: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onEdit: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onView: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onDuplicate: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

export default TableActions;
