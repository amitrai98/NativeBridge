// contants for Showing console
export const SHOW_CONSOLE = "SHOW_CONSOLE";
export const SHOW_CONSOLE_INPROGRESS = "SHOW_CONSOLE_INPROGRESS";
export const SHOW_CONSOLE_SUCCESS = "SHOW_CONSOLE_SUCCESS";
export const SHOW_CONSOLE_FAILURE = "SHOW_CONSOLE_FAILURE";

export function showConsole(payload) {
  return {
    type: SHOW_CONSOLE,
    payload: payload
  };
}

export function showConsoleProgress(payload) {
  return {
    type: SHOW_CONSOLE_INPROGRESS,
    payload: payload
  };
}

export function showConsoleSuccess(payload) {
  return {
    type: SHOW_CONSOLE_SUCCESS,
    payload: payload
  };
}
export function showConsoleFailure(payload) {
  return {
    type: SHOW_CONSOLE_FAILURE,
    payload: payload
  };
}
