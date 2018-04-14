'use strict';

module.exports.default = module.exports = {
  data: {
    'insertTime': '2017-09-19 18:30:00',
    'credit_card': {
      'cardData': [{
        'bank_code': 'BCOM',
        'lastdatasource': 'email',
        'type': 'NumberInt',
        'card_type': '交通银行信用卡',
        'userid': '24302990606',
        'billData': [{
          'pay_date': '2017-10-01 00:00:00',
          'lastdatasource': 'email',
          'bill_date': '2017-09-04 00:00:00',
          'min_payment': 5493.42,
          'new_charges': 31068.9,
          'uuid': 'ZC1205-MAtnbzakeF_xOHQtrJKIG79',
          'pointsnew': 'NumberInt',
          'billtype': 'NumberInt',
          'credit_limit': 'NumberInt',
          'cycle_end_date': '2017-09-04 00:00:00',
          'currency': 'CNY',
          'id': 'NumberInt',
          'new_balance': 30968.9,
          'cycle_begin_date': '2017-08-03 00:00:00',
          'pointsavailable': 'NumberInt',
          'recordData': [{
            'summary': '代付业务转入－银联 中国民生银行股份有限公司广州分行',
            'bill_id': 'NumberInt',
            'amount': 'NumberInt',
            'cardnum': '7689',
            'category_name': '信用卡还款',
            'currency': 'CNY',
            'id': 'NumberInt',
            'tran_time': '2017-08-06 00:00:00',
            'type': 'NumberInt',
            'card_id': 'NumberInt',
            'post_time': '2017-08-07 00:00:00'
          }],
          'last_pay_amount': 22269.29,
          'last_current_balance': 22169.29,
          'cash_credit_limit': 'NumberInt',
          'card_id': 'NumberInt',
          'month': '201709',
          'isrecord': '1',
          'adjustment': 'NumberInt',
          'repayment_amount': 22269.29,
          'limit_avail': 31.1
        }],
        'relation_id': 'NumberInt',
        'billtoemail': '1277647163@qq.com',
        'card_no': '7689',
        'balance': 30968.9,
        'ismail': '1',
        'bank_name': '交通银行',
        'currency': 'CNY',
        'mailData': [{
          'bill_id': 'NumberInt',
          'mailsubject': 'Received: from mail.bocomcc.com (unknown [58.246.136.163])\r\n\tby newmx1.qq.com (NewMx) with SMTP id \r\n\tfor <1277647163@qq.com>; Tue, 05 Sep 2017 20:02:51 +0800\r\nX-QQ-FEAT: F43hhim4571+mw0MZAg1/gIPEeF+0ZCHx0KgtHewP5xK3Fs1H1Re5Qwggvy9c\r\n\ts07tsYZyhzEV0YiWe7x5kOqiZG10kR6SME0JGIOAMfIU/eE9YEGFs5Tnk3HLkrGKkD3Dpv3\r\n\tE6px63MKSCMfNIeBNtjlzokt/PQfyFs/wqnh6zcNGWIYCEw99TDtul3bhRU6XyFdieqtUFO\r\n\tW0ekmE0wbbc5up6H69TL9Ri5VG3Jlf34bg6x82WKvFsWTSabcPOvy7VtHp0jZ/jd+LTM7LJ\r\n\tCjkOZg9BSnAgXT6FIUVEWuMj+lNLut7nYxXg==\r\nX-QQ-MAILINFO: NbUxUzKtP+7YYJaoY4b9Lw7yn9xsLhi0PHgGdz4zklSVkZfmB1gY1rvtE\r\n\tGIFbKrPzhvUsUbgn6FDT7U6YVhAmpOFvVL84Z12fVh8XwjYo0QCwax+CdqUN8YirSAd+B+z\r\n\tKjdpfvNggY4g/pvMj8PigYTljCPcwzjTr5MlJMfEeReBvM5zNT19IbepChFLBKrIfB2VzCx\r\n\tOji74\r\nX-QQ-mid: mx1t1504612971tuesqphz7\r\nX-QQ-CSender: pccc.bill@bocomcc.com\r\nX-QQ-ORGSender: pccc.bill@bocomcc.com\r\nReceived: from mail.bocomcc.com([182.180.47.18])\r\n\tby mail.bocomcc.com(KBAS Gateway 2.1 2.127s39k(2009-10-15),182.180.101.156) with ESMTP id mx26213.1504612971 for <1277647163@qq.com>;\r\n\tTue, 05 Sep 2017 20:02:51 +0000 (CST)\r\nX-Original-MailFrom: pccc.bill@bocomcc.com\r\nDKIM-Signature: v=1; a=rsa-sha256; q=dns/txt; c=simple/simple; d=bocomcc.com; s=default;\r\n\th=Message-ID:Content-Transfer-Encoding:Content-Type:MIME-Version:Date:To:Subject:From; bh=DENYVPkL8F0QnazPtOFkFxEsI+iO2Zx4d13TAhMnkjw=;\r\n\tb=DiB8rEHczin0fo1qvt/XzS6Kk19jhrKfE9VQOCzcgA3p6hVScz0fH4tlJ9B2RdxiIQf+4+5Xfdb2JTVNiFlueD+BhsrgxeOofo2vIrcyu0nskC7A345+hAsV5qO7dUa69uVlORsl7p/jnCBniCaesrYcfTOdqcQZehm+brYoLMI=;\r\nReceived: from mail.bocomcc.com([192.168.1.214])\r\n\tby Postfix with SMTPD id 2431\r\n\tfor <1277647163@qq.com>; Tue, 05 Sep 2017 20:02:51 +0800\r\nFrom:  =?gbk?B?vbvNqNL40NDMq8a90fPQxdPDv6jW0NDE?= <PCCC@bocomcc.com>\r\nSubject: =?gbk?B?vbvNqNL40NDQxdPDv6i159fT1cu1pQ==?=\r\nTo: "=?gbk?B?MTI3NzY0NzE2M0BxcS5jb20=?=" <1277647163@qq.com>\r\nDate: Tue, 05 Sep 2017 20:01:51 +0800\r\nMIME-Version: 1.0\r\nContent-Type: text/html; charset="gbk"\r\nContent-Transfer-Encoding: base64\r\nMessage-ID: <1504612970985723@287523>\r\n\r\nPGh0bWw+DQo8aGVhZD4NCjxtZXRhIGh0dHAtZXF1aXY9Q29udGVudC1UeXBlIGNvbnRlbnQ9InRl\r\neHQvaHRtbDsgY2hhcnNldD1nYmsiLz4NCjwvaGVhZD4NCjxib2R5Pg0KPGltZyBzcmM9aHR0cDov\r\nL2NjbWFpbC5iYW5rY29tbS5jb20vcy5odG1sP3VpZD1iYyZzdGltZT0xNTA0NjEyOTcxJmVpZD0x\r\nMDY5NDQ0MDA1JmVtYWlsPTEyNzc2NDcxNjNAcXEuY29tJnRsaWQ9Mjg3NTIzJnN0aWQ9MTEyNDQ0\r\nMyZ0aGlkPTI4NzUyMyBib3JkZXI9MCB3aWR0aD0wPjxIVE1MPjxIRUFEPjxCT0RZPjxUQUJMRSBh\r\nbGlnbj0iY2VudGVyIiBib3JkZXI9IjAiIGNlbGxwYWRkaW5nPSIwIiBjZWxsc3BhY2luZz0iMCIg\r\nc3R5bGU9ImJvcmRlci',
          'userid': '24302990606',
          'card_id': 'NumberInt'
        }],
        'id': 'NumberInt',
        'house_holder': '严俊娇',
        'isbill': '1'
      }],
      'pk_id': '2016111404519025757377',
      'create_time': '2016-11-14 19:02:55',
      'activity': 'NumberInt',
      'token': '533358e72f98d9767584925dc687df46d5e774d6ff55a7fbf534bfe031f2c889',
      'fraud_complete_time': '2017-09-19 18:17:35',
      'last_bill_updatetime': '2017-09-19 18:09:40',
      'iscard': '1',
      'name': 'u_nl94d8e',
      'mailfirsttime': '2009-02-10 14:00:00',
      'nickname': '13567043244',
      'fraud_start_time': '2017-09-19 18:00:00',
      'loginphone': '13567043244',
      'id': '24302990606',
      'udid': '7634A508-9EBE-4556-9E50-C6EC5F901DFC',
      'account': 'u_nl94d8e'
    },
    'crawler_time': '2017-09-19 18:30:00',
    'thirdId': 'f33cf85956ce59080c43daa25d73e069',
    'datapi_insert_time': 'NumberLong',
    'applyNo': '301201709193410208',
    'id_num_biz': '',
    'group': '301201709193410208'
  }
};
//# sourceMappingURL=kaniu_credit_all.js.map