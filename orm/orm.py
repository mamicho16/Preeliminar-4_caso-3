from sqlalchemy import Column, Integer, ForeignKey, Numeric, Date, Unicode
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import DeclarativeBase

class Base(DeclarativeBase):pass


# Se declara las tablas que se van a utilizar en el orm
class Ventas(Base):
    __tablename__ = 'Ventas'
    idventas = Column(Integer, primary_key=True)
    monto = Column(Numeric(precision=8, scale=3), nullable=False)
    vuelto = Column(Numeric(precision=8, scale=3), nullable=False)
    fechaventa = Column(Date, nullable=False)
    tipopago = Column(Integer, nullable=False, doc='1 pago en efectivo. 2. pago por sinpe. 3. pago en tarjeta')
    idcliente = Column(Integer, ForeignKey('cliente.idcliente'), nullable=False)
    iduser = Column(Integer, ForeignKey('user.iduser'), nullable=False)
    computer = Column(Unicode(30), nullable=False)
    checksum = Column(Unicode(150), nullable=False)


# Se inicializa el engine con el path de sql server
engine = create_engine('mssql+pyodbc://sa:Chorizo123@localhost:1433/EsencialVerde?driver=ODBC+Driver+17+for+SQL+Server')

# funcion que obtiene todas las ventas que tenga un valora >= al dado
def get_ventas(monto_venta):
    try:
        
        Session = sessionmaker(bind=engine)
        session = Session()

        query = session.query(Ventas).filter(Ventas.monto >= monto_venta)

        results = []
        for item in query:
            results.append({
                'idventas': item.idventas,
                'monto': str(item.monto),
                'vuelto': str(item.vuelto),
                'fechaventa': str(item.fechaventa),
                'tipopago': item.tipopago,
                'idcliente': item.idcliente,
                'iduser': item.iduser,
                'computer': item.computer,
                'checksum': item.checksum,
            })
        session.close()
        return results
    except Exception as e:
        print('An error occurred:', e)
        return []


lista = get_ventas(95000)

for item in lista:
    print(item['idventas'],item['monto'],item['vuelto'],item['fechaventa'],item['tipopago'],item['idcliente'],item['iduser'],item['computer'])

