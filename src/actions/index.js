import { TEXT_TITLE, TEXT_LEFT, TEXT_RIGHT } from '../constants';

export function setTextTitle(e) {
  return {
    type: TEXT_TITLE,
    payload: e.target.value
  };
}
export function setTextLeft(e) {
  return {
    type: TEXT_LEFT,
    payload: e.target.value
  };
}
export function setTextRight(e) {
  return {
    type: TEXT_RIGHT,
    payload: e.target.value
  };
}

