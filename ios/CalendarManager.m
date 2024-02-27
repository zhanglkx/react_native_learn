//
//  CalendarManager.m
//  AwesomeProject
//
//  Created by zhanglk on 2024/2/27.
//

#import "CalendarManager.h"
#import <React/RCTLog.h>
@implementation CalendarManager


// To export a module named CalendarManager
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

@end
