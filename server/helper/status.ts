const successMessage = { status: 'success' };
const errorMessage: { status: string; error: string } = {
  status: 'error',
  error: 'ERROR'
};
const status = {
  success: 200,
  error: 500,
  notfound: 404,
  unauthorized: 401,
  conflict: 409,
  created: 201,
  bad: 400,
  nocontent: 204
};

const trip_statuses = {
  active: 1.0,
  cancelled: 2.0
};
export { successMessage, errorMessage, status, trip_statuses };
