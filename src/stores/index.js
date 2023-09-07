// customStorage.js
import CryptoJS from 'crypto-js';

const encryptionKey = import.meta.env.VITE_APP_PERSISTENT_STATE_ENC_KEY;

const customStorage = {
  getItem(key) {
    const encryptedData = sessionStorage.getItem(key);
    if (encryptedData) {
      const decryptedData = CryptoJS.AES.decrypt(encryptedData, encryptionKey).toString(CryptoJS.enc.Utf8);
      return decryptedData;
    }
    return null;
  },
  setItem(key, value) {
    const encryptedData = CryptoJS.AES.encrypt(value, encryptionKey).toString();
    sessionStorage.setItem(key, encryptedData);
  },
};

export default customStorage;
