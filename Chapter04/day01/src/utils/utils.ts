interface Result {
  success: Boolean;
  errMessage?: string;
  data: any
}

export const getResponseData = (data: any, errMsg?: string): Result => {
  if(errMsg) {
    return {
      success: false,
      errMessage: errMsg,
      data
    }
  } 
  return {
    success: true,
    data
  }
}