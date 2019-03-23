FROM python:3.6.7-slim

ADD apache.log.gz /root/apache.log.gz
ADD solucao.py /root/solucao.py
ADD requirements.txt /root/requirements.txt

RUN pip install -r /root/requirements.txt

WORKDIR /root

CMD ["python", "solucao.py"]
