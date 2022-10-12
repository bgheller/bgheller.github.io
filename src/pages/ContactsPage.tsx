import React from 'react';
import classes from '../styles/ContactsStyles.module.scss';

function ContactsPage() {
    return (
        <div className={classes.main}>
            <div className={classes.mainHeadline}>My contacts</div>
            <div className={classes.contactsContainer}>
                <div className={classes.block}>
                    <div className={classes.headline}>Telegram</div>
                    <div className={classes.text}>
                        <a href='https://t.me/Timetoendthis'>@Timetoendthis</a>
                    </div>
                </div>
                <div className={classes.block}>
                    <div className={classes.headline}>LinkedIn</div>
                    <div className={classes.text}>
                        currently inaccessible
                    </div>
                </div>
                <div className={classes.block}>
                    <div className={classes.headline}>Email</div>
                    <div className={classes.text}>bgdklmheller@gmail.com</div>
                </div>
            </div>
        </div>
    )}

export default ContactsPage;