const Cards = (props) => {
  const { number, title, description } = props;
  return (
    <div className="card-container">
      <div>
        <div className="card-number">{number}</div>
        <div className="icon-bg">
          <p>
            <i className="fas fa-arrow-right card-arrow"></i>
          </p>
        </div>
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{description}</p>
    </div>
  );
};

const Cards2 = (props) => {
  const { number, title, description } = props;
  return (
    <div className="card-container">
      <div>
        <div className="card-number">{number}</div>
        <div className="icon-bg">
          <p>
            <i className="fas fa-arrow-right card-arrow"></i>
          </p>
        </div>
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{description}</p>
    </div>
  );
};

const Cards3 = (props) => {
  const { number, title, description } = props;
  return (
    <div className="card-container">
      <div>
        <div className="card-number">{number}</div>
        <div className="icon-bg">
          <p>
            <i className="fas fa-arrow-right card-arrow"></i>
          </p>
        </div>
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{description}</p>
    </div>
  );
};

const Cards4 = (props) => {
  const { number, title, description } = props;
  return (
    <div className="card-container">
      <div>
        <div className="card-number">{number}</div>
        <div className="icon-bg">
          <p>
            <i className="fas fa-arrow-right card-arrow"></i>
          </p>
        </div>
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{description}</p>
    </div>
  );
};

export { Cards, Cards2, Cards3, Cards4 };
