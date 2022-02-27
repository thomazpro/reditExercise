import { connect } from "react-redux";

function List({ list, load }) {
  return (
    <div>
      { load ? <h1>Loading...</h1> : (
        <div>
          <ul>
          { list.map(({ data: { title } }, i) => (
            <li key={ i }>{ title }</li>
          )) }
          </ul>
        </div>
      ) }
    </div>
  );
}

const mapStateToProps = (state) => ({
  list: state.reducer.lista,
  load: state.reducer.load,
});

export default connect(mapStateToProps)(List);
