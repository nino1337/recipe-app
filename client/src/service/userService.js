import { userApiInstance } from './config';

export default {
  register: async (userData) => {
    try {
      const response = await userApiInstance.post('registration', userData);
      let errorMessage = '';

      if (response.status === 400) {
        errorMessage =
          'Registrierung fehlgeschlagen. Überprüfe bitte deine Registrierungsdaten!';
      }

      if (response.status === 409) {
        errorMessage =
          'Registrierung fehlgeschlagen. Die E-Mail-Adresse ist bereits vergeben.';
      }

      return { errorMessage, response };
    } catch (error) {
      return {
        errorMessage:
          'Registrierung fehlgeschlagen. Versuche es bitte später erneut!',
      };
    }
  },
  login: async (credentials) => {
    try {
      const response = await userApiInstance.post('login', credentials);
      let errorMessage = '';

      if (response.status === 400) {
        errorMessage =
          'Anmeldung fehlgeschlagen. Überprüfe bitte deine Login-Daten!';
      }

      return { errorMessage, response };
    } catch (error) {
      return {
        errorMessage:
          'Anmeldung fehlgeschlagen. Versuche es bitte später erneut!',
      };
    }
  },
  /**
   *
   * @returns {object} { error, response }
   * error: is true when the token has expired, is invalid, when no token was actually passed,
   * when the user associated with the token does not exist anymore or when any other server error has happened
   * response: {username: String, email: String}
   */
  currentUser: async () => {
    try {
      const response = await userApiInstance.post('current-user', {
        token: window.localStorage.getItem('access_token'),
      });
      let error;

      if (
        response.status === 404 ||
        response.status === 400 ||
        response.status === 401
      ) {
        error = true;
      }

      return { error, response };
    } catch (e) {
      return { error: true };
    }
  },
  logout: () => {},
};
