from sqlalchemy import Column, Integer, ForeignKey, Numeric, Date, Unicode, String, Boolean, select
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import DeclarativeBase

class Base(DeclarativeBase):pass

engine = create_engine('mssql+pyodbc://sa:Chorizo123@localhost:1433/EsencialVerde?driver=ODBC+Driver+17+for+SQL+Server')

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

class User(Base):
    __tablename__ = 'user'
    iduser = Column(Integer, primary_key=True)
    nombre = Column(String(50), nullable=False)
    apellido1 = Column(String(50), nullable=False)
    apellido2 = Column(String(50), nullable=False)
    email = Column(String(50), nullable=False)
    password = Column(String(50), nullable=False)
    enabled = Column(Boolean, nullable=False)
    checksum = Column(String(150), nullable=False)

class Cliente(Base):
    __tablename__ = 'cliente'
    idcliente = Column(Integer, primary_key=True)
    nombre = Column(String(50), nullable=False)
    telefono = Column(Integer, nullable=False)
    email = Column(String(50), nullable=False)
    idaddress = Column(Integer, ForeignKey('address.idaddress'), nullable=False)
