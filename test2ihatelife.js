// Matter.js - http://brm.io/matter-js/
var Example = Example || {};

Example.timescale = function() {
    var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Body = Matter.Body,
        Events = Matter.Events,
        Composite = Matter.Composite,
        Composites = Matter.Composites,
        Common = Matter.Common,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        World = Matter.World,
        Bodies = Matter.Bodies;

    // create engine
    var engine = Engine.create(),
        world = engine.world;

    // create renderer
    const w = window.innerWidth;
    const h = window.innerHeight;

    //from new.js
    const matterContainer = document.querySelector("#matter-container");
    const THICCNESS = 60;
    
    var render = Render.create({
        element: matterContainer, 
        engine: engine,
        options: {
            width: matterContainer.clientWidth,
            height: matterContainer.clientHeight,
            wireframes: false,
            background: "none"
        }
    });

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    // World.add(world, [
    //     Bodies.rectangle(w/2, h, w, 155, { isStatic: true }),
    //     Bodies.rectangle(0-20, h/2, 25, 10, { isStatic: true }),
    //     Bodies.rectangle(400, 400, 400, 400, { isStatic: true }),
    //     Bodies.rectangle(90, 300, 50, 600, { isStatic: true })
    // ]);

    //blue a c e
    for (let i = 0; i < 20; i++) {
        let circle = Bodies.circle(i, 10, 30, {
            friction: 0.3,
            frictionAir: 0.00001,
            restitution: 0.8,
            render: {
                fillStyle: '#0039a6'
              }
        }, );
        Composite.add(engine.world, circle);
    }
    //orange bdfm 
    for (let i = 0; i < 25; i++) {
        let circle = Bodies.circle(i, 20, 45, {
            friction: 0.3,
            frictionAir: 0.00001,
            restitution: 0.8,
            render: {
                fillStyle: '#ff6319'
              }
        }, );
        Composite.add(engine.world, circle);
    }
    //green g
    for (let i = 0; i < 20; i++) {
        let circle = Bodies.circle(i, 13, 20, {
            friction: 0.3,
            frictionAir: 0.00001,
            restitution: 0.8,
            render: {
                fillStyle: '#6cbe45'
              }
        }, );
        Composite.add(engine.world, circle);
    }
    //gray l
    for (let i = 0; i < 33; i++) {
        let circle = Bodies.circle(i, 10, 20, {
            friction: 0.3,
            frictionAir: 0.00001,
            restitution: 0.8,
            render: {
                fillStyle: '#a7a9ac'
              }
        }, );
        Composite.add(engine.world, circle);
    }
    //brown j z
    for (let i = 0; i < 20; i++) {
        let circle = Bodies.circle(i, 10, 35, {
            friction: 0.3,
            frictionAir: 0.00001,
            restitution: 0.8,
            render: {
                fillStyle: '#996633'
              }
        }, );
        Composite.add(engine.world, circle);
    }
    //yellow n q r w
    for (let i = 0; i < 35; i++) {
        let circle = Bodies.circle(i, 14, 60, {
            friction: 0.3,
            frictionAir: 0.00001,
            restitution: 0.8,
            render: {
                fillStyle: '#fccc0a'
              }
        }, );
        Composite.add(engine.world, circle);
    }
    //red 1 2 3
    for (let i = 0; i < 34; i++) {
        let circle = Bodies.circle(i, 40, 40, {
            friction: 0.3,
            frictionAir: 0.00001,
            restitution: 0.8,
            render: {
                fillStyle: '#ee352e'
              }
        }, );
        Composite.add(engine.world, circle);
    }
    //green 4 5 6
    for (let i = 0; i < 33; i++) {
        let circle = Bodies.circle(i, 10, 40, {
            friction: 0.3,
            frictionAir: 0.00001,
            restitution: 0.8,
            render: {
                fillStyle: '#00933c'
              }
        }, );
        Composite.add(engine.world, circle);
    }
    //purple 7
    for (let i = 0; i < 20; i++) {
        let circle = Bodies.circle(i, 10, 15, {
            friction: 0.3,
            frictionAir: 0.00001,
            restitution: 0.8,
            render: {
                fillStyle: '#b933ad'
              }
        }, );
        Composite.add(engine.world, circle);
    }
    //blue t
    for (let i = 0; i < 20; i++) {
        let circle = Bodies.circle(i, 10, 10, {
            friction: 0.3,
            frictionAir: 0.00001,
            restitution: 0.8,
            render: {
                fillStyle: '#00add0'
              }
        }, );
        Composite.add(engine.world, circle);
    }
    //gray s
    for (let i = 0; i < 20; i++) {
        let circle = Bodies.circle(i, 10, 10, {
            friction: 0.3,
            frictionAir: 0.00001,
            restitution: 0.8,
            render: {
                fillStyle: '#808183'
              }
        }, );
        Composite.add(engine.world, circle);
    }
    
    var groundUp = Bodies.rectangle(
        0,
        0 - matterContainer.clientHeight / 8,
        27184,
        THICCNESS / 2,
        { isStatic: true,
            render: {
                fillStyle: 'white'
              }
         }
    );
    var ground = Bodies.rectangle(
        matterContainer.clientWidth / 2,
        matterContainer.clientHeight + THICCNESS / 2,
        27184,
        THICCNESS,
        { isStatic: true,
            render: {
                fillStyle: 'white'
              }
         }
    );
    let leftWall = Bodies.rectangle(
        0 - THICCNESS / 2,
        matterContainer.clientHeight / 2,
        THICCNESS / 2,
        matterContainer.clientHeight * 5,
        { isStatic: true,
            render: {
                fillStyle: 'white'
              }
         }
    );
    let rightWall = Bodies.rectangle(
        matterContainer.clientWidth + THICCNESS / 2,
        matterContainer.clientHeight / 2,
        THICCNESS / 3,
        matterContainer.clientHeight * 5,
        { isStatic: true,
            render: {
                fillStyle: 'white'
              }
         }
    );
    // add all of the bodies to the world
    Composite.add(engine.world, [ground, groundUp, leftWall, rightWall]);






    var explosion = function(engine) {
        var bodies = Composite.allBodies(engine.world);

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];

            if (!body.isStatic && body.position.y >= 500) {
                var forceMagnitude = 0.03 * body.mass;

                Body.applyForce(body, body.position, {
                    x: (forceMagnitude + Common.random() * forceMagnitude) * Common.choose([1, -1]), 
                    y: -forceMagnitude + Common.random() * -forceMagnitude
                });
            }
        }
    };

    var timeScaleTarget = 1,
        counter = 0;


    Events.on(engine, 'afterUpdate', function(event) {
        // tween the timescale for bullet time slow-mo
        engine.timing.timeScale += (timeScaleTarget - engine.timing.timeScale) * 0.05;

        counter += 1;

        // every 1.5 sec
        if (counter >= 60 * 1.5) {

            // flip the timescale
            if (timeScaleTarget < 1) {
                timeScaleTarget = 1;
            } else {
                timeScaleTarget = 0.05;
            }

            // create some random forces
            explosion(engine);

            // reset counter
            counter = 0;
        }
    });

    var bodyOptions = {
        frictionAir: 0, 
        friction: 0.0001,
        restitution: 0.8
    };
    
    // add some small bouncy circles... remember Swordfish?
    // World.add(world, Composites.stack(20, 100, 15, 3, 20, 40, function(x, y) {
    //     return Bodies.circle(x, y, Common.random(10, 20), bodyOptions);
    // }));

    // add some larger random bouncy objects
    // World.add(world, Composites.stack(50, 50, 8, 3, 0, 0, function(x, y) {
    //     switch (Math.round(Common.random(0, 1))) {

    //     case 0:
    //         if (Common.random() < .9) {
    //             // return Bodies.rectangle(x, y, Common.random(20, 50), Common.random(20, 50), bodyOptions);
    //             return Bodies.circle(x, y, Common.random(20, 50), bodyOptions);
    //         } else {
    //             // return Bodies.rectangle(x, y, Common.random(80, 120), Common.random(20, 30), bodyOptions);
    //             return Bodies.circle(x, y, Common.random(80, 120), bodyOptions);
    //         }
    //     case 1:
    //         // return Bodies.polygon(x, y, Math.round(Common.random(4, 8)), Common.random(20, 50), bodyOptions);
    //         return Bodies.circle(x, y, Common.random(30, 70), bodyOptions);

    //     }
    // }));

    // add mouse control
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

    World.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: w, y: h }
    });

    // context for MatterTools.Demo
    return {
        engine: engine,
        runner: runner,
        render: render,
        canvas: render.canvas,
        stop: function() {
            Matter.Render.stop(render);
            Matter.Runner.stop(runner);
        }
    };
};


Example.timescale()



