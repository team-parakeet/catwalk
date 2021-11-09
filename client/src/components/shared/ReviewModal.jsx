import axios from 'axios';
import { TOKEN } from '../../../../config.js';
import Modal from '../shared/Modal.jsx';
import { ModalStyled } from '../styles/reviews/ModalStyled.styled';

function ReviewModal({ toggleModal, productId }) {
  const [overallRating, setOverallRating] = useState(0);
  const [isRecommended, setIsRecommended] = useState(true);
  const [reviewSummary, setReviewSummary] = useState('');
  const [reviewBody, setReviewBody] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleStarChangeOnClick = e => {
    setOverallRating(e);
  };

  const handleSubmitOnClick = () => {
    const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/reviews`;
    const data = {
      product_id: productId,
      rating: overallRating,
      summary: reviewSummary,
      body: reviewBody,
      recommend: isRecommended,
      name: username,
      email: email,
      photos: [],
      characteristics: {
        131841: 5,
        131840: 5,
        131838: 5,
        131839: 5,
      },
    };
    axios.post(url, data, {
      headers: {
        Authorization: TOKEN,
      },
    });
    toggleModal();
  };

  return (
    <Modal toggleModal={toggleModal} productId={productId} handleSubmit={handleSubmitOnClick}>
      <ReviewModalStyled>
        Write Your Review
        <label>Overall rating:</label>
        <div>
          <label>Would you recommend this product?</label>
          <div>
            <input
              type="radio"
              id="yes"
              name="recommended"
              value="yes"
              defaultChecked
              onChange={e => setIsRecommended(true)}
            />
            <label for="yes">Yes</label>
            <input
              type="radio"
              id="no"
              name="recommended"
              value="no"
              onChange={e => setIsRecommended(false)}
            />
            <label for="no">No</label>
          </div>
        </div>
        <div>
          <label>Review summary:</label>
          <div>
            <input
              type="text"
              id="review-summary"
              maxLength="60"
              size="60"
              placeholder="Best purchase ever!"
              onChange={e => setReviewSummary(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label>Review body:</label>
          <div>
            <textarea
              id="review-body"
              rows="3"
              columns="100"
              maxLength="1000"
              placeholder="Why did you like the product or not?"
              required
              onChange={e => setReviewBody(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label>What is your nickname:</label>
          <div>
            <input
              type="text"
              id="username"
              maxLength="60"
              size="30"
              placeholder="Example: jackson11!"
              required
              onChange={e => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label>Your email:</label>
          <div>
            <input
              type="email"
              id="email"
              maxLength="60"
              size="30"
              placeholder="Example: jackson11@email.com"
              required
              onChange={e => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button onClick={handleSubmitOnClick}>Submit</button>
          <button onClick={toggleModal}>Close</button>
        </div>
      </ReviewModalStyled>
    </Modal>
  );
}

export default Modal;