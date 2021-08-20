/**
 * Designed By NDAYISHIMIYE Muhamudu
 */
$(document).ready(function () {
  $('#closeFloating').click(function () {
    $('#cookieconsent').slideUp("slow");
    $('#closeFloatingOp').hide();
  })


  // Remember set you events before call bootstrapSwitch or they will fire after bootstrapSwitch's events
  $("[name='checkbox2']").change(function() {
    if(!confirm('Do you wanna cancel me!')) {
      this.checked = true;
    }
  });

  $('#after').bootstrapNumber();
  $('#residentialCarpetHandler, #carpetedOfficeHandler, #boardRoomCarpetHandler, #giftCarpetHandler, #homeSofaSetFaHandler, #homeSofaSetLeHandler, #officeChairFaHandler, #officeChairLeHandler, #giftSofaFaHandler, #giftSofaLeHandler, #DeepCount, #FumiCount, #laundCount,#LawnCount, #ShoeCount, #WaterTanlCount').bootstrapNumber({
    upClass: 'success',
    downClass: 'danger'
  });

  // =========================================================== 
  // DEEP & GENERAL CLEANING
  // ============================================================
  
  $('input[name=areaHandler], input[name=bedroomToiletHandler], input[name=bedroomNoToiletHandler], input[name=bathroomHandler], input[name=windowsDoorsHandler], input[name=sofaSetHandler], input[name=carpetHandler], input[name=diningChairHandler], input[name=diningCarpetHandler], input[name=officeHandler], input[name=commercialOfficeHandler], input[name=conferenceHandler], input[name=kitchenHandler], select[name=supply], select[name=frequency]').change(function() {
    var formParent = $(this).closest('form');
    var areaHandler = $('input[name=areaHandler]', formParent).val()-0;
    var bedroomToiletHandler = $('input[name=bedroomToiletHandler]', formParent).val()-0;
    var bedroomNoToiletHandler = $('input[name=bedroomNoToiletHandler]',formParent).val()-0;
    var bathroomHandler = $('input[name=bathroomHandler]', formParent).val()-0;
    var windowsDoorsHandler = $('input[name=windowsDoorsHandler]', formParent).val()-0;
    var sofaSetHandler = $('input[name=sofaSetHandler]', formParent).val()-0;
    var carpetHandler = $('input[name=carpetHandler]', formParent).val()-0;
    var diningChairHandler = $('input[name=diningChairHandler]', formParent).val()-0;
    var diningCarpetHandler = $('input[name=diningCarpetHandler]', formParent).val()-0;
    var officeHandler = $('input[name=officeHandler]', formParent).val()-0;
    var commercialOfficeHandler = $('input[name=commercialOfficeHandler]', formParent).val()-0;
    var conferenceHandler = $('input[name=conferenceHandler]', formParent).val()-0;
    var kitchenHandler = $('input[name=kitchenHandler]', formParent).val()-0;
    var supply = $('select[name=supply]', formParent).val()-0;
    var frequency = $('select[name=frequency', formParent).val()-0;

    if (areaHandler >= 0 && bedroomToiletHandler >= 0 && bedroomNoToiletHandler >= 0 && bathroomHandler >= 0 && windowsDoorsHandler >= 0 && sofaSetHandler >= 0 && carpetHandler >= 0 && diningChairHandler >= 0 && diningCarpetHandler >= 0 && officeHandler >= 0 && commercialOfficeHandler >= 0 && conferenceHandler >= 0 && kitchenHandler >= 0 && supply >= 0 && frequency >= 0)

      $('span.price', formParent).text((areaHandler * 1175 + bedroomToiletHandler * 100000 + bedroomNoToiletHandler * 80000 + bathroomHandler * 25000 + windowsDoorsHandler * 20000 + sofaSetHandler * 90000 + carpetHandler * 45000 + diningChairHandler * 60000 + diningCarpetHandler * 35000 + officeHandler * 45000 + commercialOfficeHandler * 60000 + conferenceHandler * 180000 + kitchenHandler * 150000 + supply)* frequency);
  });
  $('#checkboxOne').on('change', function () {
    var checkBoxOne = parseFloat($('span.price').text());

    if (checkBoxOne) {
      if($(this).is(':checked')){
        checkBoxOne = checkBoxOne + 70000;
      }else{
        checkBoxOne = checkBoxOne - 70000;
      }
      $('span.price').text(checkBoxOne);
    }
  });
  $('#checkboxTwo').on('change', function () {
    var checkBoxTwo = parseFloat($('span.price').text());

    if (checkBoxTwo) {
      if($(this).is(':checked')){
        checkBoxTwo = checkBoxTwo + 50000;
      }else{
        checkBoxTwo = checkBoxTwo - 50000;
      }
      $('span.price').text(checkBoxTwo);
    }
  });
  $('#checkboxThree').on('change', function () {
    var checkBoxThree = parseFloat($('span.price').text());

    if (checkBoxThree) {
      if($(this).is(':checked')){
        checkBoxThree = checkBoxThree + 50000;
      }else{
        checkBoxThree = checkBoxThree - 50000;
      }
      $('span.price').text(checkBoxThree);
    }
  });
  $('#checkboxFour').on('change', function () {
    var checkBoxFour = parseFloat($('span.price').text());

    if (checkBoxFour) {
      if($(this).is(':checked')){
        checkBoxFour = checkBoxFour + 120000;
      }else{
        checkBoxFour = checkBoxFour - 120000;
      }
      $('span.price').text(checkBoxFour);
    }
  });
  $('#checkboxFive').on('change', function () {
    var checkBoxFive = parseFloat($('span.price').text());

    if (checkBoxFive) {
      if($(this).is(':checked')){
        checkBoxFive = checkBoxFive + 40000;
      }else{
        checkBoxFive = checkBoxFive - 40000;
      }
      $('span.price').text(checkBoxFive);
    }
  });

  // =========================================================== 
  // FUMIGATION & PEST CONTROL 
  // ============================================================

  $('input[name=homeCarhandler], input[name=roomHandler], input[name=houseHandler], input[name=commercialOfficeHandler], input[name=mediumContainerHandler], input[name=largeContainerHandler]').change(function() {
    var formParent = $(this).closest('form');
    var homeCarhandler = $('input[name=homeCarhandler]', formParent).val()-0;
    var roomHandler = $('input[name=roomHandler]', formParent).val()-0;
    var houseHandler = $('input[name=houseHandler]',formParent).val()-0;
    var commercialOfficeHandler = $('input[name=commercialOfficeHandler]', formParent).val()-0;
    var mediumContainerHandler = $('input[name=mediumContainerHandler]', formParent).val()-0;
    var largeContainerHandler = $('input[name=largeContainerHandler]', formParent).val()-0;


    if (homeCarhandler >= 0 && roomHandler >= 0 && houseHandler >= 0 && commercialOfficeHandler >= 0 && mediumContainerHandler >= 0 && largeContainerHandler >= 0 )

      $('span.priceFumigation', formParent).text(homeCarhandler * 15000 + roomHandler * 35000 + houseHandler * 120000 + commercialOfficeHandler * 45000 + mediumContainerHandler * 180000 + largeContainerHandler * 360000);
  });
  $('#checkboxGarden').on('change', function () {
    var checkboxGarden = parseFloat($('span.priceFumigation').text());

    if (checkboxGarden) {
      if($(this).is(':checked')){
        checkboxGarden = checkboxGarden + 90000;
      }else{
        checkboxGarden = checkboxGarden - 90000;
      }
      $('span.priceFumigation').text(checkboxGarden);
    }
  });

  // =========================================================== 
  // LAUNDRY & DRY CLEANING
  // ============================================================

  $('input[name=doubleBedSheetHandler], input[name=mediumBedSheetHandler], input[name=simpleBedSheetHandler], input[name=bedCoverHandler], input[name=pillowCasesHandler], input[name=mosquitoNetsHandler], input[name=bigTowelsHandler], input[name=mediumTowelHandler], input[name=faceTowelHandler], input[name=dayCurtainsHandler], input[name=nightCurtainsHandler], input[name=tableClothesHandler],input[name=kitchenWearsHandler], input[SuitTrousersHandler], input[name=tieHandler], input[name=trousersHandler], input[name=singleSuitHandler], input[name=weddingDressHandler], input[name=ordinaryDressHandler],input[name=skirtHandler], input[name=ShirtAmidoHandler], input[name=ShirtHandler], input[name=tShirtHandler], input[name=VestHandler], input[name=folongoHandler],input[name=linenPantAmidoHandler], input[name=jeansHandler], input[name=shortsHandler], input[name=kitengeAmidoHandler], input[name=kitengeFabricsAmidoHandler], input[name=BasinMenAmidoHandler],input[name=libayaClothAmidoHandler], input[name=traditionalWearHandler], input[name=leatherJacketHandler], input[name=jumperSweaterJacketHandler], input[name=largeCoatHandler], input[name=pignoireHandler],input[name=nightDressHandler], input[name=pajamaHandler], input[name=sportsWearHandler], input[name=underpantsHandler], input[name=pocketSquareHandler], input[name=scarfsHandler],input[name=HatsHandler], input[name=SoaksHandler], input[name=GlovesHandler], input[name=babyDollsHandler], input[name=laptopBagsHandler], input[name=mediumSuitcaseHandler], input[name=largeSuitecaseHandler], select[name=shipping], select[name=express]').change(function() {

    var formParent = $(this).closest('form');
    var doubleBedSheetHandler = $('input[name=doubleBedSheetHandler]', formParent).val()-0;
    var mediumBedSheetHandler = $('input[name=mediumBedSheetHandler]', formParent).val()-0;
    var simpleBedSheetHandler = $('input[name=simpleBedSheetHandler]',formParent).val()-0;
    var bedCoverHandler = $('input[name=bedCoverHandler]', formParent).val()-0;
    var pillowCasesHandler = $('input[name=pillowCasesHandler]', formParent).val()-0;
    var mosquitoNetsHandler = $('input[name=mosquitoNetsHandler]', formParent).val()-0;
    var bigTowelsHandler = $('input[name=bigTowelsHandler]', formParent).val()-0;
    var mediumTowelHandler = $('input[name=mediumTowelHandler]', formParent).val()-0;
    var faceTowelHandler = $('input[name=faceTowelHandler]', formParent).val()-0;
    var dayCurtainsHandler = $('input[name=dayCurtainsHandler]', formParent).val()-0;
    var nightCurtainsHandler = $('input[name=nightCurtainsHandler]', formParent).val()-0;
    var tableClothesHandler = $('input[name=tableClothesHandler]', formParent).val()-0;
    var kitchenWearsHandler = $('input[name=kitchenWearsHandler]', formParent).val()-0;
    var SuitTrousersHandler = $('input[name=SuitTrousersHandler]', formParent).val()-0;
    var tieHandler = $('input[name=tieHandler]', formParent).val()-0;
    var trousersHandler = $('input[name=trousersHandler]', formParent).val()-0;
    var singleSuitHandler = $('input[name=singleSuitHandler]', formParent).val()-0;
    var weddingDressHandler = $('input[name=weddingDressHandler]', formParent).val()-0;
    var ordinaryDressHandler = $('input[name=ordinaryDressHandler]', formParent).val()-0;
    var skirtHandler = $('input[name=skirtHandler]', formParent).val()-0;
    var ShirtAmidoHandler = $('input[name=ShirtAmidoHandler]', formParent).val()-0;
    var ShirtHandler = $('input[name=ShirtHandler]', formParent).val()-0;
    var tShirtHandler = $('input[name=tShirtHandler]', formParent).val()-0;
    var VestHandler = $('input[name=VestHandler]', formParent).val()-0;
    var folongoHandler = $('input[name=folongoHandler]', formParent).val()-0;
    var linenPantAmidoHandler = $('input[name=linenPantAmidoHandler]', formParent).val()-0;
    var jeansHandler = $('input[name=jeansHandler]', formParent).val()-0;
    var shortsHandler = $('input[name=shortsHandler]', formParent).val()-0;
    var kitengeAmidoHandler = $('input[name=kitengeAmidoHandler]', formParent).val()-0;
    var kitengeFabricsAmidoHandler = $('input[name=kitengeFabricsAmidoHandler]', formParent).val()-0;
    var BasinMenAmidoHandler = $('input[name=BasinMenAmidoHandler]', formParent).val()-0;
    var libayaClothAmidoHandler = $('input[name=libayaClothAmidoHandler]', formParent).val()-0;
    var traditionalWearHandler = $('input[name=traditionalWearHandler]', formParent).val()-0;
    var leatherJacketHandler = $('input[name=leatherJacketHandler]', formParent).val()-0;
    var jumperSweaterJacketHandler = $('input[name=jumperSweaterJacketHandler]', formParent).val()-0;
    var largeCoatHandler = $('input[name=largeCoatHandler]', formParent).val()-0;
    var pignoireHandler = $('input[name=pignoireHandler]', formParent).val()-0;
    var nightDressHandler = $('input[name=nightDressHandler]', formParent).val()-0;
    var pajamaHandler = $('input[name=pajamaHandler]', formParent).val()-0;
    var sportsWearHandler = $('input[name=sportsWearHandler]', formParent).val()-0;
    var underpantsHandler = $('input[name=underpantsHandler]', formParent).val()-0;
    var pocketSquareHandler = $('input[name=pocketSquareHandler]', formParent).val()-0;
    var scarfsHandler = $('input[name=scarfsHandler]', formParent).val()-0;
    var HatsHandler = $('input[name=HatsHandler]', formParent).val()-0;
    var SoaksHandler = $('input[name=SoaksHandler]', formParent).val()-0;
    var GlovesHandler = $('input[name=GlovesHandler]', formParent).val()-0;
    var babyDollsHandler = $('input[name=babyDollsHandler]', formParent).val()-0;
    var laptopBagsHandler = $('input[name=laptopBagsHandler]', formParent).val()-0;
    var mediumSuitcaseHandler = $('input[name=mediumSuitcaseHandler]', formParent).val()-0;
    var largeSuitecaseHandler = $('input[name=largeSuitecaseHandler]', formParent).val()-0;
    var shipping = $('select[name=shipping]', formParent).val()-0;
    var express = $('select[name=express]', formParent).val()-0;


    if (doubleBedSheetHandler >= 0 && mediumBedSheetHandler >= 0 && simpleBedSheetHandler >= 0 && bedCoverHandler >= 0 && pillowCasesHandler >= 0 && mosquitoNetsHandler >= 0 && bigTowelsHandler >= 0 && mediumTowelHandler >= 0 && faceTowelHandler >= 0 && dayCurtainsHandler >= 0 && nightCurtainsHandler >= 0 && tableClothesHandler >= 0 && kitchenWearsHandler >= 0 && SuitTrousersHandler >=0 && tieHandler >= 0 && trousersHandler >= 0 && singleSuitHandler >= 0 && weddingDressHandler >= 0 && ordinaryDressHandler >= 0 && skirtHandler >= 0 && ShirtAmidoHandler >= 0 && ShirtHandler >= 0 && tShirtHandler >= 0 && VestHandler >= 0 && folongoHandler >= 0 && linenPantAmidoHandler >= 0 && jeansHandler >= 0 && shortsHandler >= 0 && kitengeAmidoHandler >= 0 && kitengeFabricsAmidoHandler >= 0 && BasinMenAmidoHandler >= 0 && libayaClothAmidoHandler >= 0 && traditionalWearHandler >= 0 && leatherJacketHandler >= 0 && jumperSweaterJacketHandler >= 0 && largeCoatHandler >= 0 && pignoireHandler >= 0 && nightDressHandler >= 0 && pajamaHandler >= 0 && sportsWearHandler >= 0 && underpantsHandler >= 0 && pocketSquareHandler >= 0 && scarfsHandler >= 0 && HatsHandler >= 0 && SoaksHandler >= 0 && GlovesHandler >= 0 && babyDollsHandler >= 0 && laptopBagsHandler >= 0 && mediumSuitcaseHandler >= 0 && largeSuitecaseHandler >= 0 && shipping >= 0 && express >= 0)

      $('span.priceLaundry', formParent).text(((doubleBedSheetHandler * 4000 + mediumBedSheetHandler * 3000 + simpleBedSheetHandler * 2000 + bedCoverHandler * 8000 + pillowCasesHandler * 1500 + mosquitoNetsHandler * 3000 + bigTowelsHandler * 8000 + mediumTowelHandler * 4000 + faceTowelHandler * 2000 + dayCurtainsHandler * 4000 + nightCurtainsHandler * 10000 + tableClothesHandler * 2000 + kitchenWearsHandler * 1500 + SuitTrousersHandler * 5000 + tieHandler * 1000 + trousersHandler * 2000 + singleSuitHandler * 2500 + weddingDressHandler * 8000 + ordinaryDressHandler * 2500 + skirtHandler * 2500 + ShirtAmidoHandler * 3500 + ShirtHandler * 3500 + tShirtHandler * 2000 + VestHandler * 1500 + folongoHandler * 3000 + linenPantAmidoHandler * 3500 + jeansHandler * 2500 + shortsHandler * 2000 + kitengeAmidoHandler * 4000 + kitengeFabricsAmidoHandler * 4000 + BasinMenAmidoHandler * 6000 + libayaClothAmidoHandler * 4500 + traditionalWearHandler * 6000 + leatherJacketHandler * 5000 + jumperSweaterJacketHandler * 3000 + largeCoatHandler * 4500 + pignoireHandler * 5000 + nightDressHandler * 1500 + pajamaHandler * 2000 + sportsWearHandler * 3000 + underpantsHandler * 1000 + pocketSquareHandler * 1000 + scarfsHandler * 1000 + HatsHandler * 1500 + SoaksHandler * 1000 + GlovesHandler * 1000 + babyDollsHandler * 9000 + laptopBagsHandler * 3000 + mediumSuitcaseHandler * 4000 + largeSuitecaseHandler * 8000) * express) + shipping);
  });

  // =========================================================== 
  // SHOE CARE [SHINE & WASH]
  // ============================================================

  $('input[name=suedeCareHandler], input[name=shoeShineHandler], input[name=SuetCaseHandler], input[name=militaryShineHandler], input[name=MouldTreatmentHandler], input[name=sneakerWashHandler], input[name=hikingShoeHandler], input[name=fullMirroShineHandler], input[name=deepNourshmentShineHandler], select[name=express2]').change(function() {
    var formParent = $(this).closest('form');
    var suedeCareHandler = $('input[name=suedeCareHandler]', formParent).val()-0;
    var shoeShineHandler = $('input[name=shoeShineHandler]', formParent).val()-0;
    var SuetCaseHandler = $('input[name=SuetCaseHandler]',formParent).val()-0;
    var militaryShineHandler = $('input[name=militaryShineHandler]', formParent).val()-0;
    var MouldTreatmentHandler = $('input[name=MouldTreatmentHandler]', formParent).val()-0;
    var sneakerWashHandler = $('input[name=sneakerWashHandler]', formParent).val()-0;
    var hikingShoeHandler = $('input[name=hikingShoeHandler]', formParent).val()-0;
    var fullMirroShineHandler = $('input[name=fullMirroShineHandler]', formParent).val()-0;
    var deepNourshmentShineHandler = $('input[name=deepNourshmentShineHandler]', formParent).val()-0;
    var express2 = $('select[name=express2]', formParent).val()-0;


    if (suedeCareHandler >= 0 && shoeShineHandler >= 0 && SuetCaseHandler >= 0 && militaryShineHandler >= 0 && MouldTreatmentHandler >= 0 && sneakerWashHandler >= 0 && hikingShoeHandler >= 0 && fullMirroShineHandler >= 0 && deepNourshmentShineHandler >= 0 && express2 >= 0 )

      $('span.priceShoe', formParent).text((suedeCareHandler * 5500 + shoeShineHandler * 4000 + SuetCaseHandler * 8000 + militaryShineHandler * 6000 + MouldTreatmentHandler * 8000 + sneakerWashHandler * 10000 + hikingShoeHandler * 10000 + fullMirroShineHandler * 12000 + deepNourshmentShineHandler * 18000) * express2);
  });


  // =========================================================== 
  // CARPET AND SOFA CLEANING
  // ============================================================

  $('input[name=residentialCarpetHandler], input[name=carpetedOfficeHandler], input[name=boardRoomCarpetHandler], input[name=giftCarpetHandler], input[name=homeSofaSetFaHandler], input[name=homeSofaSetLeHandler], input[name=officeChairFaHandler], input[name=officeChairLeHandler], input[name=giftSofaFaHandler], input[name=giftSofaLeHandler]').change(function() {
    var formParent = $(this).closest('form');
    var residentialCarpetHandler = $('input[name=residentialCarpetHandler]', formParent).val()-0;
    var carpetedOfficeHandler = $('input[name=carpetedOfficeHandler]', formParent).val()-0;
    var boardRoomCarpetHandler = $('input[name=boardRoomCarpetHandler]',formParent).val()-0;
    var giftCarpetHandler = $('input[name=giftCarpetHandler]', formParent).val()-0;
    var homeSofaSetFaHandler = $('input[name=homeSofaSetFaHandler]', formParent).val()-0;
    var homeSofaSetLeHandler = $('input[name=homeSofaSetLeHandler]', formParent).val()-0;
    var officeChairFaHandler = $('input[name=officeChairFaHandler]', formParent).val()-0;
    var officeChairLeHandler = $('input[name=officeChairLeHandler]', formParent).val()-0;
    var giftSofaFaHandler = $('input[name=giftSofaFaHandler]', formParent).val()-0;
    var giftSofaLeHandler = $('input[name=giftSofaLeHandler]', formParent).val()-0;


    if (residentialCarpetHandler >= 0 && carpetedOfficeHandler >= 0 && boardRoomCarpetHandler >= 0 && giftCarpetHandler >= 0 && homeSofaSetFaHandler >= 0 && homeSofaSetLeHandler >= 0 && officeChairFaHandler >= 0 && officeChairLeHandler >= 0 && giftSofaFaHandler >= 0 && giftSofaLeHandler >= 0 )

      $('span.priceCarpetSofa', formParent).text(residentialCarpetHandler * 35000 + carpetedOfficeHandler * 80000 + boardRoomCarpetHandler * 100000 + giftCarpetHandler * 45000 + homeSofaSetFaHandler * 150000 + homeSofaSetLeHandler * 100000 + officeChairFaHandler * 20000 + officeChairLeHandler * 15000 + giftSofaFaHandler * 15000 + giftSofaLeHandler * 12000);
  });


  // =========================================================== 
  // LAWN & GARDEN CARE
  // ============================================================

  $('input[name=homeGardenHandler], input[name=homePlayGroundHandler], input[name=commercialGardenHandler], input[name=soccerFieldHandler], input[name=openAreaGardenHandler]').change(function() {
    var formParent = $(this).closest('form');
    var homeGardenHandler = $('input[name=homeGardenHandler]', formParent).val()-0;
    var homePlayGroundHandler = $('input[name=homePlayGroundHandler]', formParent).val()-0;
    var commercialGardenHandler = $('input[name=commercialGardenHandler]',formParent).val()-0;
    var soccerFieldHandler = $('input[name=soccerFieldHandler]', formParent).val()-0;
    var openAreaGardenHandler = $('input[name=openAreaGardenHandler]', formParent).val()-0;


    if (homeGardenHandler >= 0 && homePlayGroundHandler >= 0 && commercialGardenHandler >= 0 && soccerFieldHandler >= 0 && openAreaGardenHandler >= 0)

      $('span.priceLawnGarden', formParent).text(homeGardenHandler * 150000 + homePlayGroundHandler * 350000 + commercialGardenHandler * 500000 + soccerFieldHandler * 800000 + openAreaGardenHandler * 400000);
  });

  // =========================================================== 
  // WATER TANK CLEANING
  // ============================================================

  $('input[name=homeWaterTankGrHandler], input[name=schoolWaterTankGrHandler], input[name=hotelWaterTankGrHandler], input[name=hospitalWaterTankGrHandler], input[name=giftWaterTankGrHandler], input[name=homeWaterTankSitHandler], input[name=schoolWaterTankSitHandler], input[name=hotelWaterTankSitHandler], input[name=hospitalWaterTankSitHandler], input[name=giftWaterTankSitHandler]').change(function() {
    var formParent = $(this).closest('form');
    var homeWaterTankGrHandler = $('input[name=homeWaterTankGrHandler]', formParent).val()-0;
    var schoolWaterTankGrHandler = $('input[name=schoolWaterTankGrHandler]', formParent).val()-0;
    var hotelWaterTankGrHandler = $('input[name=hotelWaterTankGrHandler]',formParent).val()-0;
    var hospitalWaterTankGrHandler = $('input[name=hospitalWaterTankGrHandler]', formParent).val()-0;
    var giftWaterTankGrHandler = $('input[name=giftWaterTankGrHandler]', formParent).val()-0;

    var homeWaterTankSitHandler = $('input[name=homeWaterTankSitHandler]', formParent).val()-0;
    var schoolWaterTankSitHandler = $('input[name=schoolWaterTankSitHandler]', formParent).val()-0;
    var hotelWaterTankSitHandler = $('input[name=hotelWaterTankSitHandler]',formParent).val()-0;
    var hospitalWaterTankSitHandler = $('input[name=hospitalWaterTankSitHandler]', formParent).val()-0;
    var giftWaterTankSitHandler = $('input[name=giftWaterTankSitHandler]', formParent).val()-0;


    if (homeWaterTankGrHandler >= 0 && schoolWaterTankGrHandler >= 0 && hotelWaterTankGrHandler >= 0 && hospitalWaterTankGrHandler >= 0 && giftWaterTankGrHandler >= 0 && homeWaterTankSitHandler >= 0 && schoolWaterTankSitHandler >= 0 && hotelWaterTankSitHandler >= 0 && hospitalWaterTankSitHandler >= 0 && giftWaterTankSitHandler >= 0)

      $('span.priceWaterTank', formParent).text(homeWaterTankGrHandler * 60000 + schoolWaterTankGrHandler * 80000 + hotelWaterTankGrHandler * 90000 + hospitalWaterTankGrHandler * 60000 + giftWaterTankGrHandler * 50000 + homeWaterTankSitHandler * 85000 + schoolWaterTankSitHandler * 95000 + hotelWaterTankSitHandler * 120000 + hospitalWaterTankSitHandler * 85000 + giftWaterTankSitHandler * 50000);
  });





  !(function ($) {
    "use strict";

    // Preloader
    $(window).on("load", function () {
      if ($("#preloader").length) {
        $("#preloader")
          .delay(120)
          .fadeOut("slow", function () {
            $(this).remove();
          });
      }
    });

    // Blocking Copy, Paste and Right Click
    $(document).ready(function () {
      $("body").bind("cut copy paste", function (e) {
        e.preventDefault();
      });
      $("body").on("contextmenu", function (e) {
        return false;
      });
    });

    // Activate smooth scroll on page load with hash links in the url
    $(document).ready(function () {
      if (window.location.hash) {
        var initial_nav = window.location.hash;
        if ($(initial_nav).length) {
          var scrollto = $(initial_nav).offset().top - scrolltoOffset;
          $("html, body").animate(
            {
              scrollTop: scrollto,
            },
            1500,
            "easeInOutExpo"
          );
        }
      }
    });

    // Intro carousel
    var heroCarousel = $("#heroCarousel");
    var heroCarouselIndicators = $("#hero-carousel-indicators");
    heroCarousel
      .find(".carousel-inner")
      .children(".carousel-item")
      .each(function (index) {
        index === 0
          ? heroCarouselIndicators.append(
              "<li data-target='#heroCarousel' data-slide-to='" +
                index +
                "' class='active'></li>"
            )
          : heroCarouselIndicators.append(
              "<li data-target='#heroCarousel' data-slide-to='" +
                index +
                "'></li>"
            );
      });
    heroCarousel.on("slid.bs.carousel", function (e) {
      $(this)
        .find(".carousel-content ")
        .addClass("animate__animated animate__fadeInDown");
    });

    // // Navigation active state on scroll
    // var nav_sections = $('section');
    // var main_nav = $('.nav-menu, .mobile-nav');

    // $(window).on('scroll', function() {
    //   var cur_pos = $(this).scrollTop() + 200;

    //   nav_sections.each(function() {
    //     var top = $(this).offset().top,
    //       bottom = top + $(this).outerHeight();

    //     if (cur_pos >= top && cur_pos <= bottom) {
    //       if (cur_pos <= bottom) {
    //         main_nav.find('li').removeClass('active');
    //       }
    //       main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
    //     }
    //     if (cur_pos < 300) {
    //       $(".nav-menu ul:first li:first, .mobile-menu ul:first li:first").addClass('active');
    //     }
    //   });
    // });

    // Mobile Navigation
    if ($(".nav-menu").length) {
      var $mobile_nav = $(".nav-menu").clone().prop({
        class: "mobile-nav d-lg-none",
      });
      $("body").append($mobile_nav);
      $("body").prepend(
        '<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>'
      );
      $("body").append('<div class="mobile-nav-overly"></div>');

      $(document).on("click", ".mobile-nav-toggle", function (e) {
        $("body").toggleClass("mobile-nav-active");
        $(".mobile-nav-toggle i").toggleClass(
          "icofont-navigation-menu icofont-close"
        );
        $(".mobile-nav-overly").toggle();
      });

      $(document).click(function (e) {
        var container = $(".mobile-nav, .mobile-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          if ($("body").hasClass("mobile-nav-active")) {
            $("body").removeClass("mobile-nav-active");
            $(".mobile-nav-toggle i").toggleClass(
              "icofont-navigation-menu icofont-close"
            );
            $(".mobile-nav-overly").fadeOut();
          }
        }
      });
    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
      $(".mobile-nav, .mobile-nav-toggle").hide();
    }

    // Toggle .header-scrolled class to #header when page is scrolled
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $("#header").addClass("header-scrolled");
        $("#topbar").addClass("topbar-scrolled");
      } else {
        $("#header").removeClass("header-scrolled");
        $("#topbar").removeClass("topbar-scrolled");
      }
    });

    if ($(window).scrollTop() > 100) {
      $("#header").addClass("header-scrolled");
      $("#topbar").addClass("topbar-scrolled");
    }

    // Back to top button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $(".back-to-top").fadeIn("slow");
      } else {
        $(".back-to-top").fadeOut("slow");
      }
    });

    $(".back-to-top").click(function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        1500,
        "easeInOutExpo"
      );
      return false;
    });

    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
      delay: 10,
      time: 1000,
    });

    // Portfolio details carousel
    $(".portfolio-details-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      items: 1,
    });

    // Init AOS
    function aos_init() {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }
    $(window).on("load", function () {
      aos_init();
    });
  })(jQuery);

  /*  Explor Room Slider
      /*----------------------------------------------------*/
  function l_product_slider() {
    if ($(".l_product_slider").length) {
      $(".l_product_slider").owlCarousel({
        loop: true,
        margin: 30,
        items: 4,
        nav: true,
        autoplay: true,
        smartSpeed: 1500,
        dots: false,
        navContainerClass: "l_product_slider",
        navText: [
          '<i class="icofont-simple-left" aria-hidden="true"></i>',
          '<i class="icofont-simple-right" aria-hidden="true"></i>',
        ],
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
          },
          575: {
            items: 2,
          },
          992: {
            items: 3,
          },
          1200: {
            items: 4,
          },
        },
      });
    }
  }
  l_product_slider();

  // CONATCT FORM

  $(function () {
    function after_form_submitted(data) {
      if (data.result == "success") {
        // $('form#reused_form').hide();
        $("#success_message").show();
        $("#error_message").hide();
      } else {
        $("#error_message").append("<ul></ul>");

        jQuery.each(data.errors, function (key, val) {
          $("#error_message ul").append("<li>" + key + ":" + val + "</li>");
        });
        $("#success_message").hide();
        $("#error_message").show();

        //reverse the response on the button
        $('button[type="button"]', $form).each(function () {
          $btn = $(this);
          label = $btn.prop("orig_label");
          if (label) {
            $btn.prop("type", "submit");
            $btn.text(label);
            $btn.prop("orig_label", "");
          }
        });
      } //else
    }

    $("#reused_form").submit(function (e) {
      e.preventDefault();

      $form = $(this);
      //show some response on the button
      $('button[type="submit"]', $form).each(function () {
        $btn = $(this);
        $btn.prop("type", "button");
        $btn.prop("orig_label", $btn.text());
        $btn.text("Sending ...");
      });

      $.ajax({
        type: "POST",
        url: "handler.php",
        data: $form.serialize(),
        success: after_form_submitted,
        dataType: "json",
      });
    });
  });

  function makeTimer() {
    //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");
    var endTime = new Date("01 January 2021 00:56:00 GMT+01:00");
    endTime = Date.parse(endTime) / 1000;

    var now = new Date();
    now = Date.parse(now) / 1000;

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    );

    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }

    $("#days").html(days + "<p>Days</p>");
    $("#hours").html(hours + "<p>Hrs</p>");
    $("#minutes").html(minutes + "<p>Mins</p>");
    $("#seconds").html(seconds + "<p>Secs</p>");
  }

  setInterval(function () {
    makeTimer();
  }, 1000);
});
