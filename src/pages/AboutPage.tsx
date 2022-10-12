import React from 'react';
import classes from '../styles/AboutStyles.module.scss';

function AboutPage() {
    return (
        <div className={classes.main}>
            <div className={classes.headContainer}>
                <div className={classes.mainHeadline}>More about me</div>
                <div className={classes.mainText}>Aww, you really want to learn more about me...</div>
            </div>
            <div className={classes.bodyContainer}>
                <div className={classes.block}>
                    <div className={classes.headline}>Who?</div>
                    <div className={classes.text}>
                        Bogdan(yes, that's an actual firstname) Klimko.
                        I like cats and birds, enjoy cold and wet autumnish like weather and I'm a developer, sort of.
                    </div>
                    <div className={classes.text}>
                        Haven't taken part in any *real* projects yet ( ɵ̥̥‸ɵ̥̥)
                    </div>
                    <div className={classes.text}>
                        But I continue learning and deepening my understanding of IT sphere.
                        Heck, look at me, a year ago I didn't knew a thing about developing and now here I am making my own site.
                        Nice. 
                    </div>
                </div>
                <div className={classes.block}>
                    <div className={classes.headline}>Where?</div>
                    <div className={classes.text}>Currently in Russia. And, of course, I'm always ready to relocate.</div>
                    <div className={classes.text}>It's a shame my country is, well, like this...</div>
                    <div className={classes.text}>
                        But it is what it is, I guess. You can learn more about my views on an interview
                        if you wish to do so.
                    </div>
                </div>
                <div className={classes.block}>
                    <div className={classes.headline}>What I know?</div>
                    <div className={classes.text}>So as for the autumn of 2022 I've learned:</div>
                    <div className={classes.text}>Languages: JavaScript, HTML, CSS (+ SCSS preprocessor)</div>
                    <div className={classes.text}>Frameworks: ReactJS</div>
                    <div className={classes.text}>
                        And currently learning TypeScript, how to intergrate webpack into my routine, etc.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;