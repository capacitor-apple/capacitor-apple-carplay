import Foundation

@objc public class CapacitorCarplay: NSObject, CapacitorCarplayProtocol {
    private var carplay: CapacitorCarplayProtocol?
    
    @objc public func setCarplay(_ carplay: CapacitorCarplayProtocol?) {
        self.carplay = carplay
    }

    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }

    @objc public func displayAlert(_ message: String) {
        self.carplay?.displayAlert(message)
    }
}
