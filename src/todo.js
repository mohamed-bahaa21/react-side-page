import { TransitionGroup, CSSTransition } from "react-transition-group";

<Draggable axis="x">
    <div className="side-page noselect">

        <TransitionGroup>
            <CSSTransition classNames="slide" timeout={1000}>

                <Route exact path="/book-one" component={BookOne} />

            </CSSTransition>
        </TransitionGroup>

    </div>
</Draggable>