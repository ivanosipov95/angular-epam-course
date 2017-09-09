function userServiceLog($delegate, $log) {
    var getCurrentUser = $delegate.getCurrentUser;
    
    $delegate.getCurrentUser = function () {
        $log.info(`Call method getCurrentUser ${new Date()}`);

        return getCurrentUser();
    };
 
    return $delegate;
}