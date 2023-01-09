import React from 'react';
import { useDispatch } from 'react-redux';
import '../../assets/scss/main.scss';
import { clearItems } from '../../redux/basket/slice';

interface ModalWindowProps {
  active: boolean;
  setActive: (value: boolean) => void;
}

const Modal: React.FC<ModalWindowProps> = ({ active, setActive }) => {
  const dispatch = useDispatch();

  const confirmForm = (e: React.MouseEvent) => {
    e.preventDefault();
    setActive(false);
    dispatch(clearItems());
  };
  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? 'modal__content active' : 'modal__content'}
        onClick={(e) => e.stopPropagation()}
      >
        <form className="pay-form">
          <div className="person-details form-block">
            <h2 className="subtitle">Person details</h2>
            <div className="person-name form-item">
              <input type="text" placeholder="Name" className="form-input" />
            </div>
            <div className="person-surname form-item">
              <input type="text" placeholder="Surname" className="form-input" />
            </div>
            <div className="phone-number form-item">
              <input
                type="text"
                placeholder="Phone number"
                className="form-input"
              />
            </div>
            <div className="address form-item">
              <input
                type="text"
                placeholder="Delivery address"
                className="form-input"
              />
            </div>
            <div className="email form-item">
              <input type="text" placeholder="E-mail" className="form-input" />
            </div>
          </div>
          <div className="card-details form-block">
            <h2 className="subtitle">Credit card details</h2>
            <div className="card-data">
              <div className="number">
                <img
                  className="card-logo"
                  src="https://i.guim.co.uk/img/media/b73cc57cb1d46ae742efd06b6c58805e8600d482/16_0_2443_1466/master/2443.jpg?width=700&quality=85&auto=format&fit=max&s=fb1dca6cdd4589cd9ef2fc941935de71"
                  alt="img of bank"
                />
                <input type="text" placeholder="Card number" />
              </div>
              <div className="other-data">
                <div className="valid-data data-block">
                  <span>VALID:</span>
                  <input
                    type="text"
                    placeholder="Valid Thru"
                    className="input-valid"
                  />
                </div>
                <div className="cvv-data data-block">
                  <span>CVV:</span>
                  <input
                    type="text"
                    placeholder="Code"
                    className="input-valid"
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            className="button pay-btn btn-confirm"
            type="submit"
            onClick={confirmForm}
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};
export default Modal;
