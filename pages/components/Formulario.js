const Formulario = () => {
  return (
    <>
      {/* formularios con inputs para una ubicacion */}
      {/* clase con bootstrap centrada totalmente */}
      <div className="container">
        <div className="position-absolute top-100 start-50 translate-middle">
          <div className="col-md-13">
            <div className="card">
              <form className="container ">
                <div className="m-3 form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Ingresa tu ubicacion"
                  />
                </div>
                <input
                  type="submit"
                  className="m-2 ms-5 btn btn-primary btn-lg btn-block"
                  value="Buscar"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Formulario;
