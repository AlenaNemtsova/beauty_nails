ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [55.732839, 37.622315],
        zoom: 15,
        controls: ['routePanelControl']
    });

    var control = myMap.controls.get('routePanelControl');

    control.routePanel.state.set({
        type: 'masstransit',
        fromEnabled: true,
        toEnabled: false,
        to: 'Москва, Погорельский переулок 6',
    });

    control.routePanel.options.set({
        allowSwitch: false,
        reverseGeocoding: true,
        types: { masstransit: true, pedestrian: true, taxi: true }
    });

    var switchPointsButton = new ymaps.control.Button({
        data: { content: "Поменять местами", title: "Поменять точки местами" },
        options: { selectOnClick: false, maxWidth: 160 }
    });

    switchPointsButton.events.add('click', function () {
        control.routePanel.switchPoints();
    });
    myMap.controls.add(switchPointsButton);

});

