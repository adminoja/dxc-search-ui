export interface IDxcVerifyAccountRefCodeItem {
    id: string;
    user_id: string;
    user_name: string;
    user_fullname: string;
    user_email: string;
    token: string;
    refcode: string;
    OTP: string;
    send_datetime: string;
    is_activate: string;
    activate_datetime: string;
    activate_action: string;
    email_content: string;
    email_title: string;
    new_password: string;
    new_pid: string;
    new_email: string;
    new_phone: string;
    new_fname: string;
    new_lname: string;
    new_citizencardnumber: string;
}