import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { checkPasswords, strengthPassword } from './password-validator';

describe('PasswordValidator', () => {
  describe('strengthPassword', () => {
    it('should return null when password contains number, lower letter and upper letter and password length is min 8', () => {
      const password = `Passw0rd`;
      const control = new FormControl(password);

      const result = strengthPassword(control);

      expect(result).toBe(null);
    });

    it('should return error when password doesnt contain number', () => {
      const password = `Password`;
      const control = new FormControl(password);

      const result = strengthPassword(control);

      expect(result).toStrictEqual({ strong: true });
    });

    it('should return error when password doesnt contain at least one upper letter', () => {
      const password = `password`;
      const control = new FormControl(password);

      const result = strengthPassword(control);

      expect(result).toStrictEqual({ strong: true });
    });

    it('should return error when password doesnt contain at least one lower letter', () => {
      const password = `PASSWORD`;
      const control = new FormControl(password);

      const result = strengthPassword(control);

      expect(result).toStrictEqual({ strong: true });
    });

    it('should return error when password doesnt have at least 8 characters', () => {
      const password = `P@ssw0r`;
      const control = new FormControl(password);

      const result = strengthPassword(control);

      expect(result).toStrictEqual({ strong: true });
    });
  });

  describe('checkPasswords', () => {
    it('should return null when password and confirm password is the same', () => {
      const password = `Passw0rd`;
      const control = new FormGroup({
        password: new FormControl(password),
        confirmPassword: new FormControl(password),
      });

      const result = checkPasswords(control);

      expect(result).toBe(null);
    });

    it('should return error when passwords are different', () => {
      const password = `P@ssw0r`;
      const confirmPassword = `P@ssw0rd`;
      const control = new FormGroup({
        password: new FormControl(password),
        confirmPassword: new FormControl(confirmPassword),
      });

      const result = checkPasswords(control);

      expect(result).toStrictEqual({ differentPasswords: true });
    });
  });
});
