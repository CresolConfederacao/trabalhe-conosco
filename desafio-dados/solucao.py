import pandas as pd
import os

def read_and_process_data():
    data = pd.read_csv('apache.log.gz',
        compression = 'gzip',
        sep = " ",
        header = None,
        names = ['ip', 'to_drop', 'user', 'some_code', 'timestamp',
                'request', 'response_code', 'response_bytes', 'url', 'browser']
        ).drop(columns=['to_drop'])

    data.timestamp = pd.to_datetime(data.timestamp, format='[%Y-%m-%dT%H:%M:%SZ]')
    data.set_index(data.timestamp, inplace=True)

    data.browser = data.browser.apply(lambda x: x.split(" ")[0])

    top_5_users = data.groupby(by='user').size().sort_values(ascending=False).head().reset_index().user

    top_10_browsers = data.groupby(by='browser').size().sort_values(ascending=False).head(10).reset_index().browser

    top_classC_addresses = data.loc[
        data.ip.apply(lambda x: int(x.split('.')[0]) >= 192 and int(x.split('.')[0]) < 224)
        ].groupby(by='ip').size().sort_values(ascending=False).reset_index().ip

    top_access_hour = data.resample('H').size().sort_values(ascending=False).index[0].hour

    top_consumption_hour = data.response_bytes.resample('H').sum().sort_values(ascending=False).index[0].hour

    top_consumption_endpoint = data.assign(
            endpoint = data.request.apply(lambda x: x.split("/")[1])
            ).groupby('endpoint').size().sort_values(ascending=False).index[0]

    bytes_per_minute = data.response_bytes.resample('Min').sum().mean()

    bytes_per_hour = data.response_bytes.resample('H').sum().mean()

    users_per_minute = data.user.resample('Min').size().mean()

    users_per_hour = data.user.resample('H').size().mean()

    total_client_errors_by_error_code = data.loc[data.response_code.apply(lambda x: int(x)//100 == 4)].groupby('response_code').size().sort_values(ascending=False).to_dict()


    total_successful_requests = data.loc[data.response_code.apply(lambda x: int(x)//100 == 2)].shape[0]

    total_redirected_requests = data.loc[data.response_code.apply(lambda x: int(x)//100 == 3)].shape[0]

    return pd.DataFrame(
        {
        'top_5_users': [list(top_5_users)],
        'top_10_browsers': [list(top_10_browsers)],
        'top_classC_addresses': [list(top_classC_addresses)],
        'top_access_hour': [top_access_hour],
        'top_consumption_hour': [top_consumption_hour],
        'top_consumption_endpoint': [top_consumption_endpoint],
        'bytes_per_minute': [bytes_per_minute],
        'bytes_per_hour': [bytes_per_hour],
        'users_per_minute': [users_per_minute],
        'users_per_hour': [users_per_hour],
        'total_client_errors_by_error_code': [total_client_errors_by_error_code],
        'total_successful_requests': [total_successful_requests],
        'total_redirected_requests': [total_redirected_requests]
        }
    )

if __name__ == '__main__':
    if not os.path.exists('out'):
        os.makedirs('out')
    read_and_process_data().to_csv('./out/result.csv', index=False)
